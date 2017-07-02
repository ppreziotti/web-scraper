$(document).ready(function() {

  $("#scrape").on("click", function() {
    window.location = "/scrape";
  });

  function saveArticle() {
    event.preventDefault();

    var title = $(this).data("title");

	$.ajax({
      method: "PUT",
	  url: "/api/articles/" + title,
	  success: function() {
	    alert("Article saved successfully!");
	  }
	});
  }

  $(document).on("click", ".btn-save", saveArticle);
});
