// Pagine fisse: l'indirizzo è il nome del file (uguale a quello del vecchio sito)
// e ogni pagina mostra in fondo i documenti della sua sezione.
const sezioni = {
  "chi-siamo": "Fondazione",
  documenti: "Bilanci e verbali",
  "report-attivita": "Report attività",
};

export default {
  layout: "layouts/pagina.njk",
  permalink: "/{{ page.fileSlug }}/",
  eleventyComputed: {
    documenti_categoria: (data) => data.documenti_categoria || sezioni[data.page.fileSlug],
  },
};
