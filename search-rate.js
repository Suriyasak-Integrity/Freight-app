import { fetchMaerskRate, fetchHapagRate } from "@/lib/fetchRate";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { origin, destination, containerType, carrier } = req.body;

  try {
    let data = null;

    if (carrier === "maersk") {
      data = await fetchMaerskRate({ origin, destination, containerType });
    } else if (carrier === "hapag") {
      data = await fetchHapagRate({ origin, destination, containerType });
    } else {
      return res.status(400).json({ error: "Invalid carrier" });
    }

    return res.status(200).json({ data });
  } catch (error) {
    console.error("API error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
