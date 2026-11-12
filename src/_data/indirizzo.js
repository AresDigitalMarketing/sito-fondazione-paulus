// Trasforma il campo «Indirizzo della pagina» del pannello in un indirizzo pulito:
// "Nuovi Vertici 2026" → "nuovi-vertici-2026". Accetta anche un indirizzo completo incollato.
export default function () {
  return function pulisci(testo) {
    if (!testo) return "";
    let t = String(testo).trim().replace(/^https?:\/\/[^/]+/i, "");
    t = t.split("/").filter(Boolean).pop() || "";
    return t
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .replace(/[’'`]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };
}
