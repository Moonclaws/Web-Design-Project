document.getElementById("commentForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var comment = document.getElementById("comment").value;
  if (comment.trim() !== "") {
      var newComment = document.createElement("div");
      newComment.classList.add("comment");
      newComment.innerHTML = "<p>User: " + comment + "</p><p>Admin: " + prompt("Enter your response:") + "</p>";
      document.querySelector(".comment-box").appendChild(newComment);
      document.getElementById("comment").value = "";
  }
});

