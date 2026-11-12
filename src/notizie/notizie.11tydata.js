// Gli articoli mantengono gli stessi indirizzi del vecchio sito WordPress: /titolo-dell-articolo/
// Se nel pannello si compila «Indirizzo della pagina», l'articolo si sposta lì
// e il vecchio indirizzo viene reindirizzato in automatico (vedi src/redirects.njk).
export default {
  layout: "layouts/articolo.njk",
  eleventyComputed: {
    permalink: (data) => `/${data.indirizzo(data.url_pagina) || data.page.fileSlug}/`,
  },
};
