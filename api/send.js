export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method === "POST") {
    const googleScriptUrl = "https://script.google.com/macros/s/AKfycbydH2KE4bbSqZ2ScKd78TNOhB8bKeJcw4vlXjTQnCaCmJuoiFSQTtOpX4Ytdp3rpF3S/exec";
    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });
    const text = await response.text();
    res.status(200).send(text);
  } else if (req.method === "GET") {
    const googleScriptUrl = "https://script.google.com/macros/s/AKfycbydH2KE4bbSqZ2ScKd78TNOhB8bKeJcw4vlXjTQnCaCmJuoiFSQTtOpX4Ytdp3rpF3S/exec";
    const response = await fetch(googleScriptUrl);
    const json = await response.json();
    res.status(200).json(json);
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

