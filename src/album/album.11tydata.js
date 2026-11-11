// Ogni album della Fotogallery ha la sua pagina: /fotogallery/nome-dell-album/
export default {
  layout: "layouts/album.njk",
  permalink: "/fotogallery/{{ page.fileSlug }}/",
};
