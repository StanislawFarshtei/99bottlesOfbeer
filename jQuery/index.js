
$("h1").addClass("big-title");
$("input").keydown(function (event) {
    $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
    $("h1").css("color", "purple");
});
