// Gli articoli mantengono gli stessi indirizzi del vecchio sito WordPress: /titolo-dell-articolo/
export default {
  layout: "layouts/articolo.njk",
  permalink: "/{{ page.fileSlug }}/",
};
