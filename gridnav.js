var li = $('li');
var liSelected;
const GameAreaHeights = Object.freeze({
    NEWGAME: "30%",
    JOINGAME: "30%",
    LOBBY: "30%",
});

const AnimationTimer = 300;

$(window).keydown(function(e){
    if(e.which === 40){ //Down
        if(liSelected){
            liSelected.removeClass('selected');
            next = liSelected.next();
            if(next.length > 0){
                liSelected = next.addClass('selected');
            }else{
                liSelected = li.eq(0).addClass('selected');
            }
        }else{
            liSelected = li.eq(0).addClass('selected');
        }
    }else if(e.which === 38){ //Up
        if(liSelected){
            liSelected.removeClass('selected');
            next = liSelected.prev();
            if(next.length > 0){
                liSelected = next.addClass('selected');
            }else{
                liSelected = li.last().addClass('selected');
            }
        }else{
            liSelected = li.last().addClass('selected');
        }
    }else if(e.which === 13){ //Enter
        setTimeout(() => { $(".new-game-area").css("height", GameAreaHeights.NEWGAME); }, AnimationTimer); //Open
        $(".button-area").css("height", "0"); //Close
    }
});

function gotochat() {
    setTimeout(() => { $(".new-game-area").css("height", GameAreaHeights.NEWGAME); }, AnimationTimer); //Open
    $(".button-area").css("height", "0"); //Close
};

$("#new-game-button").click(() => {
    setTimeout(() => { $(".new-game-area").css("height", GameAreaHeights.NEWGAME); }, AnimationTimer); //Open
    $(".button-area").css("height", "0"); //Close
});

$(".back-button").click(() => {
    setTimeout(() => { $(".button-area").css("height", GameAreaHeights.NEWGAME); }, AnimationTimer);
    $(".new-game-area").css("height", "0");
});

