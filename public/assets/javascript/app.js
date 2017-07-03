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

  function showModal() {
  	var modal = document.getElementById("comment-modal");
  	modal.style.display = "block";
  }

  function postComment() {
  	// event.preventDefault();
  	var title = $(this).data("title")
  	console.log(title);
  	var comment = $("#comment-input").val();
  	console.log(comment);
	$.ajax({
	  method: "POST",
	  url: "/api/articles/" + title,
	  data: {
	  	title: title,
	    body: $("#comment-input").val()
   	  }
	}).done(function(data) {
	  console.log(data);
	});
  }

  $(document).on("click", ".btn-save", saveArticle);
  $(document).on("click", ".btn-delete", deleteArticle);
  $(document).on("click", ".btn-post-comment", postComment);
});
