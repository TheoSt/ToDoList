$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

$("ul").on("click", ".delTodo", function(e){
  $(this).parent().fadeOut(500, function() {
      $(this).remove();
  });
  e.stopPropagation() //stop bubbling the event - cause it fires the span and the li - ul etc.
});

$("input[type='text']").keypress(function(e) {
  if(e.which === 13) {
    var text = $(this).val();
    $(this).val("");
    $("ul").append("<li><span class='delTodo'><i class='fas fa-trash'></i></span> "+text+"</li>");
  }
});
