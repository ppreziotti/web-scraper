$(document).ready(function() {

  $("#scrape").on("click", function() {
    window.location = "/scrape";
  });

  function saveArticle() {
    var title = $(this).data("title");
	$.ajax({
      method: "PUT",
	  url: "/api/articles/" + title
	}).done(function() {
	  location.reload();
	});
  }

  function deleteArticle() {
    var title = $(this).data("title");
    $.ajax({
      method: "DELETE",
      url: "/api/articles/" + title
    }).done(function() {
      location.reload();
    });
  }

  $(document).on("click", ".btn-save", saveArticle);
  $(document).on("click", ".btn-delete", deleteArticle);
});
