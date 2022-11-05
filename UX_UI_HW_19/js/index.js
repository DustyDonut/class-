
console.log("Your index.js file is loaded correctly!");

$(function () {
    $("subhead").mouseover(function () {
        $("skills").css("opacity", "100");
    });
    $("subhead").mouseout(function () {
        $("skills").css("opacity", "0");
    });
});