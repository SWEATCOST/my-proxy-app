export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  const scriptUrl = "https://script.google.com/macros/s/AKfycbydH2KE4bbSqZ2ScKd78TNOhB8bKeJcw4vlXjTQnCaCmJuoiFSQTtOpX4Ytdp3rpF3S/exec";

  try {
    if (req.method === "POST") {
      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });

      const text = await response.text();
      res.status(200).send(text);
    }

    else if (req.method === "GET") {
      const response = await fetch(scriptUrl);
      const json = await response.json();
      res.status(200).json(json);
    }

    else {
      res.status(405).json({ error: "Method Not Allowed" });
    }

  } catch (error) {
    console.error("Proxy Error:", error);
    res.status(500).json({ error: "Internal Server Error", detail: error.message });
  }
}
