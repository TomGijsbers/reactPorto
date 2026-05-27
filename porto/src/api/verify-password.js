// /api/verify-password.js
export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { password, file } = req.body;

  const allowedFiles = {
    pva: "/documents/PVA_TomGijsbers.pdf",
    realisatie: "/documents/Realisatiedocument_TomGijsbers.pdf",
    reflectie: "/documents/ReflectieDocument_TomGijsbers.pdf",
  };

  if (password !== process.env.DOC_PASSWORD) {
    return res.status(401).json({ error: "Ongeldig wachtwoord." });
  }

  if (!allowedFiles[file]) {
    return res.status(400).json({ error: "Onbekend bestand." });
  }

  return res.status(200).json({ url: allowedFiles[file] });
}