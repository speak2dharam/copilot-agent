function calc1(getCalc, getNextStep) {
    var getID = "#stepBox_" + getCalc+"_" + getNextStep
    $(".stepBox").slideUp(333);
    //$(getID).slideDown(1111);
    $(getID).slideDown(333, function () {
        // Only scroll if step is 2
        if (getNextStep == 2) {
            $('html, body').animate({
                scrollTop: $(getID).offset().top
            }, 500);
        }
        else {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        }
    });

    //if (getNextStep==2) {
    //    window.location.href = "index.html" + getID;
    //}
}

$(document).ready(function () {
    $("#mySwitch").click(function () {
        $(this).toggleClass("on");
        if ($(this).hasClass("on")) {
            //$("#statusText").text("Switch is ON");
            $(".stepBox").slideUp(333);
            $("#stepBox_2_1").slideDown(333);
        } else {
            //$("#statusText").text("Switch is OFF");
            $(".stepBox").slideUp(333);
            $("#stepBox_1_1").slideDown(333);
        }
    });
});