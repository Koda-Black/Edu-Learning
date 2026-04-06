const FALLBACK_RATE = 1500;

let cachedRate: number | null = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 3600000; // 1 hour

export async function getNairaRate(): Promise<number> {
  if (cachedRate && Date.now() - cacheTimestamp < CACHE_DURATION) {
    return cachedRate;
  }
  try {
    const res = await fetch(
      "https://api.exchangerate-api.com/v4/latest/USD",
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) throw new Error("API error");
    const data = await res.json();
    const rate = data?.rates?.NGN;
    if (typeof rate === "number" && rate > 0) {
      cachedRate = rate;
      cacheTimestamp = Date.now();
      return rate;
    }
  } catch {
    // fallback
  }
  return FALLBACK_RATE;
}

export function nairaToUsd(naira: number, rate: number): string {
  if (rate <= 0) return "";
  return (naira / rate).toFixed(0);
}

export function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString("en-NG")}`;
}
