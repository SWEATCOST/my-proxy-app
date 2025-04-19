export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method === "POST") {
    // Google Apps Script로 proxy POST 요청 전송 (fetch)
  } else if (req.method === "GET") {
    // Google Apps Script로부터 누적 총합 fetch
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
