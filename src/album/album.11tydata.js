// Ogni album della Fotogallery ha la sua pagina: /fotogallery/nome-dell-album/
// «Indirizzo della pagina» nel pannello permette di cambiarlo (con reindirizzamento automatico).
export default {
  layout: "layouts/album.njk",
  eleventyComputed: {
    permalink: (data) => `/fotogallery/${data.indirizzo(data.url_pagina) || data.page.fileSlug}/`,
  },
};
