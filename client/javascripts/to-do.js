//jshint esversion: 6

let controller = function() {
  if (localStorage.getItem("toDoList")) {
    $(".comments").html(localStorage.getItem("toDoList"));
  }

  let addCommentFromInputBox = function() {
    //Semmy uses "$" to name variables that will contain jQuery objects
    let $new_comment;

    if ($(".comment-input input").val() !== "") {
      $new_comment = $("<p>").text($(".comment-input input").val());
      //$new_comment.hide();
      $(".comments").append($new_comment);
      //$new_comment.fadeIn();
      $(".comment-input input").val("");

      localStorage.setItem("toDoList", $(".comments").html());
      console.log(localStorage.getItem("toDoList"));
    }
  };

  $(".comment-input button").on("click", function(event) {
    addCommentFromInputBox();
  });

  $(".comment-input input").on("keypress", function(event) {
    if (event.keyCode === 13) {
      addCommentFromInputBox();
    }
  });
};

let deleteHandler = () => {
  console.log("delete");
  localStorage.removeItem("toDoList");
  window.location.reload();
};

$(document).ready(() => {
  console.log("ready");
  let buttonElem = document.querySelectorAll("button")[1];
  buttonElem.addEventListener("click", deleteHandler);
  controller();
});
