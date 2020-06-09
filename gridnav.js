var li = $('li');
var liSelected;
const GameAreaHeights = Object.freeze({
    BUTTON: "15%",
    NEWGAME: "35%",
    JOINGAME: "35%",
    LOBBY: "100%",
    GAMEPLAY: "100%"
});

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
    }else if(e.which === 13){ //Up
        setTimeout(() => { $(".new-game-area").css("height", GameAreaHeights.NEWGAME); }, 300); //Open
        $(".button-area").css("height", "0"); //Close
    }
});