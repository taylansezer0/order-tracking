export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({ message: "API çalışıyor" });
  }

  if (req.method === "POST") {
    const { orderNumber, email } = req.body;

    return res.status(200).json({
      success: true,
      status: "Hazırlanıyor",
    });
  }

  return res.status(405).json({ error: "Method not allowed" });
}