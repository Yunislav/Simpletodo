// Check off specefic todos by clicking
// This will only run when an li inside a UL is clicked
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// Make the X delete Todos
// This will only run when a span inside a UL is clicked
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    })
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        var todoText = $(this).val()
        if ($(this).val() == "") {
            alert("Todo Can't be Empty");
        } else {
            $(this).val("");
            // Create a new li and add to ul
            $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
        }

    }
});

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});

