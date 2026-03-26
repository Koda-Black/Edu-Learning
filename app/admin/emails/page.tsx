"use client";
import { useState, useEffect } from "react";

interface EmailContact {
  email: string;
  name: string;
  source: string;
  addedAt: string;
}

export default function EmailsAdmin() {
  const [contacts, setContacts] = useState<EmailContact[]>([]);
  const [loading, setLoading] = useState(true);
  const [newEmail, setNewEmail] = useState("");
  const [newName, setNewName] = useState("");
  const [adding, setAdding] = useState(false);
  const [bulkSubject, setBulkSubject] = useState("");
  const [bulkBody, setBulkBody] = useState("");
  const [showCompose, setShowCompose] = useState(false);

  useEffect(() => {
    fetch("/api/admin/emails")
      .then((r) => r.json())
      .then(setContacts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleAdd = async () => {
    if (!newEmail) return;
    setAdding(true);
    try {
      const res = await fetch("/api/admin/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: newEmail,
          name: newName,
          source: "manual",
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setContacts(data);
        setNewEmail("");
        setNewName("");
      }
    } catch (err) {
      console.error(err);
    }
    setAdding(false);
  };

  const handleBulkEmail = () => {
    // Generate mailto link with all contacts in BCC
    const emails = contacts.map((c) => c.email).join(",");
    const subject = encodeURIComponent(bulkSubject);
    const body = encodeURIComponent(bulkBody);
    window.open(`mailto:?bcc=${emails}&subject=${subject}&body=${body}`);
  };

  const exportCSV = () => {
    const csv = [
      "Email,Name,Source,Date Added",
      ...contacts.map(
        (c) =>
          `"${c.email}","${c.name}","${c.source}","${new Date(c.addedAt).toLocaleDateString()}"`,
      ),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `email-list-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Email List</h1>
        <div className="flex gap-2">
          <button
            onClick={exportCSV}
            className="px-4 py-2 bg-white border text-gray-600 rounded-lg text-sm hover:bg-gray-50 transition"
          >
            Export CSV
          </button>
          <button
            onClick={() => setShowCompose(!showCompose)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition"
          >
            {showCompose ? "Close Compose" : "Compose Bulk Email"}
          </button>
        </div>
      </div>

      {/* Bulk Email Composer */}
      {showCompose && (
        <div className="bg-white rounded-xl p-6 border mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Compose Bulk Email
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            This will open your email client with all {contacts.length} contacts
            in BCC.
          </p>
          <div className="space-y-3">
            <input
              type="text"
              value={bulkSubject}
              onChange={(e) => setBulkSubject(e.target.value)}
              placeholder="Email subject..."
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
            <textarea
              value={bulkBody}
              onChange={(e) => setBulkBody(e.target.value)}
              placeholder="Email body..."
              rows={6}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
            <button
              onClick={handleBulkEmail}
              disabled={!bulkSubject || !bulkBody}
              className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:opacity-50 transition"
            >
              Open in Email Client
            </button>
          </div>
        </div>
      )}

      {/* Add Contact */}
      <div className="bg-white rounded-xl p-4 border mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Name"
            className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-sm"
          />
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="Email address"
            className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-sm"
          />
          <button
            onClick={handleAdd}
            disabled={adding || !newEmail}
            className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 disabled:opacity-50 transition"
          >
            Add
          </button>
        </div>
      </div>

      {/* Contact List */}
      {loading ? (
        <div className="bg-white rounded-xl p-6 border animate-pulse">
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-10 bg-gray-200 rounded" />
            ))}
          </div>
        </div>
      ) : contacts.length === 0 ? (
        <div className="bg-white rounded-xl p-12 border text-center text-gray-500">
          <p className="text-4xl mb-3">📧</p>
          <p>No email contacts yet.</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                  Email
                </th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                  Name
                </th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                  Source
                </th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase">
                  Added
                </th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, idx) => (
                <tr
                  key={idx}
                  className="border-b last:border-0 hover:bg-gray-50"
                >
                  <td className="px-4 py-3 text-sm text-gray-800">
                    {contact.email}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {contact.name || "—"}
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                      {contact.source}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {new Date(contact.addedAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
