$('#ready').hover(function () {
    $("#ready").hide();
    $("#begin").show();
});
$('#ready').hover(function () {
    $("#ready").hide();
    $("#begin").show();
    $("#over").fadeIn(1000, function () {
    });
});
$('#over').click(function () {
    $("#begin").fadeOut("slow", function () {
    });
    $("#over").hide();
    $("#addBTextB").show();


});
$("#addBTextB").click(function () {
    $("#addBTextB").hide();
    $("#text1").slideDown("slow", function () {
    });
    $("#addClass").show();

});
$("#addClass").click(function () {
    $("#text1").addClass("highlight");
    $("#slideToggle").show();

});
$("#slideToggle").click(function () {
    $("#text1").slideToggle("slow", function () {
    });
    $("#append").show();
    $("#addClass").hide();
});
$("#append").click(function () {
    $("#text1").append("<strong> click HTML to see how this sentence looks.</strong>");
    $("#html").show();
});
$("#html").click(function () {
    $("#append").hide();
    $("#slideToggle").hide();
    var htmlString = $("#text1").html();
    $("#text1").text( htmlString );
    $("#done").show();
});
$("#done").hover(function () {
    $("#html").hide();  
    $("#toggle").show(); 
});





$("#toggle").click(function () {
    $("#wrapper").slideToggle("slow", function () {
    });

});
$('#rules').click(function () {
    $("#rules").hide();
    $("p").before("Rules:");
    $("p").after("Follow the messages.");
});
$("#light").click(function () {
    $$('link').attr('href', 'style.css')
    });
$("#dark").click(function () {
        $$('link').attr('href', 'styledark.css')
        });