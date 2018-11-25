var test_1 = $("#test-1");
var test_2 = $("#test-2");



$(document).ready(function () {
    $("#menu").on("click", function () {
        $(".bg-2").css("background-color", "rgb(151, 75, 75)");
        test_1.css("display","grid");
        test_2.css("display","none");
    })

    $("#contact").on("click", function () {
        $(".bg-2").css("background-color", "green");
        test_1.css("display","none");
        test_2.css("display","grid");
    })
});

