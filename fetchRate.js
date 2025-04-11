// ✅ สร้างไฟล์ใหม่ที่: lib/fetchRate.js

export async function fetchMaerskRate({ origin, destination, containerType }) {
  const tokenRes = await fetch("https://api.maersk.com/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(
          process.env.MAERSK_CLIENT_ID + ":" + process.env.MAERSK_CLIENT_SECRET
        ).toString("base64"),
    },
    body: "grant_type=client_credentials",
  });

  const tokenData = await tokenRes.json();
  const accessToken = tokenData.access_token;

  // Call actual pricing API (example endpoint - adjust as needed)
  const rateRes = await fetch(
    `https://api.maersk.com/rates?origin=${origin}&destination=${destination}&containerType=${containerType}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const data = await rateRes.json();
  return data;
}

export async function fetchHapagRate({ origin, destination, containerType }) {
  const tokenRes = await fetch("https://api.hlag.com/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(
          process.env.HLAG_CLIENT_ID + ":" + process.env.HLAG_CLIENT_SECRET
        ).toString("base64"),
    },
    body: "grant_type=client_credentials",
  });

  const tokenData = await tokenRes.json();
  const accessToken = tokenData.access_token;

  // Call Hapag API endpoint (example - adjust as needed)
  const rateRes = await fetch(
    `https://api.hlag.com/price-api/v1/rates?origin=${origin}&destination=${destination}&containerType=${containerType}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const data = await rateRes.json();
  return data;
}
