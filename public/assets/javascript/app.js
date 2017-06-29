$("#scrape").on("click", function() {
  window.location = "/scrape";
});

$(".btn-save").on("click", function() {
  event.preventDefault();
  Article.findOneAndUpdate({})
});