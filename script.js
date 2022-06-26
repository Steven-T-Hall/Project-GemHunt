//insert jquery//
//Add play button to start the game//
//make image show when play//
$(".Playbutton").click(function() {
    $(".boulder").show();
    //add text//
    $(".Text1").show();
});

$(".boulder").click(function() {
     $(".secret-door").show();
     $(".boulder").hide();
     $(".Text1").hide();
     $(".Text2").show();
});

$(".secret-door").click(function() {
    $(".Treasure-Chest").show();
    $(".secret-door").hide();
    $(".Text2").hide();
});

$(".Treasure-Chest").click(function() {
    $(".OpenTreasure-Chest").show();
    $(".Treasure-Chest").hide();
});
      