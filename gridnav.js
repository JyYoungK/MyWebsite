var li = $('li');
var liSelected;
const GameAreaHeights = Object.freeze({
    CHAT: "40%",
    NEWGAME: "30%",
    JOINGAME: "30%",
    LOBBY: "30%",
});

const AnimationTimer = 1000;

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
        var name = liSelected.attr("class").split(' ')[0];
        // switch(name){
        //     case "option1":
        //         name = "chat-area";
        //         break;
        //     case "option2":
        //         name = "corona-area";
        //         break;
        //     case "option3":
        //         name = "poker-area";
        //         break;
        //     case "option4":
        //         name = "camera-area";
        //         break;
        //     case "option5":
        //         name = "project-area";
        //         break;
        //     case "option6":
        //         name = "setting-area";
        //         break;
        //     case "option7":
        //         name = "about-area";
        //         break;
        // }
        setTimeout(() => { $(".chat-area").css("height", GameAreaHeights.NEWGAME); }, AnimationTimer); //Open

        // setTimeout(() => { $(`.${name}`).css("height", GameAreaHeights.NEWGAME); }, AnimationTimer); //Open
        $(".select-area").css("height", "0"); //Close
    }
});

function gotochat() {
    setTimeout(() => { $(".chat-area").css("height", GameAreaHeights.CHAT); }, AnimationTimer); //Open
    $(".select-area").css("height", "0"); //Close
};

function gotocorona() {
    setTimeout(() => { $(".corona-area").css("height", GameAreaHeights.CHAT); }, AnimationTimer); //Open
    $(".select-area").css("height", "0"); //Close
};

function gotopoker() {
    setTimeout(() => { $(".poker-area").css("height", GameAreaHeights.CHAT); }, AnimationTimer); //Open
    $(".select-area").css("height", "0"); //Close
};

function gotocamera() {
    setTimeout(() => { $(".camera-area").css("height", GameAreaHeights.CHAT); }, AnimationTimer); //Open
    $(".select-area").css("height", "0"); //Close
};

function gotoproject() {
    setTimeout(() => { $(".project-area").css("height", GameAreaHeights.CHAT); }, AnimationTimer); //Open
    $(".select-area").css("height", "0"); //Close
};

function gotosetting() {
    setTimeout(() => { $(".setting-area").css("height", GameAreaHeights.CHAT); }, AnimationTimer); //Open
    $(".select-area").css("height", "0"); //Close
};

function gotoabout() {
    setTimeout(() => { $(".about-area").css("height", GameAreaHeights.CHAT); }, AnimationTimer); //Open
    $(".select-area").css("height", "0"); //Close
};


$(".back-button").click( function(event){
    var name = $(this).closest('div').attr("class").split(' ')[1];
    setTimeout(() => { $(".select-area").css("height", GameAreaHeights.CHAT); }, AnimationTimer);
    $(`.${name}`).css("height", "0");
});

