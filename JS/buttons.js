// window.addEventListener('load', gotoabout); //starts off About Me

var li = $('li');
var liSelected;
const lobbyHeight = "50%";
const contentHeight = "80%";

const AnimationTimer = 800;
jQuery.event.trigger({ type: 'keydown', which: 40 });



$(document).keydown(function(e){
    if(e.which == 40 || e.which == 83){ //Down
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
    }
    if(e.which == 38 || e.which == 87){ //Up
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
    }
    if(e.which == 13){ //Enter
        e.preventDefault();
        var name = liSelected.attr("class").split(' ')[0];
        switch(name){
            case "option1":
                name = "chat-area";
                break;
            case "option2":
                name = "corona-area";
                break;
            case "option3":
                name = "poker-area";
                break;
            case "option4":
                name = "camera-area";
                break;
            case "option5":
                name = "project-area";
                break;
            case "option6":
                name = "setting-area";
                break;
            case "option7":
                name = "about-area";
                break;
        }
        setTimeout(() => { $(`.${name}`).css("height", contentHeight); }, AnimationTimer); //Open
        $(".select-area").css("height", "0"); //Close
    }
});

function gotochat() {
    setTimeout(() => { $(".chat-area").css("height", contentHeight); }, AnimationTimer); //Open
    $(".select-area").css("height", "0"); //Close
};

function gotocorona() {
    setTimeout(() => { $(".corona-area").css("height", contentHeight); }, AnimationTimer); //Open
    $(".select-area").css("height", "0"); //Close
};

function gotopoker() {
    setTimeout(() => { $(".poker-area").css("height", contentHeight); }, AnimationTimer); //Open
    $(".select-area").css("height", "0"); //Close
};

function gotocamera() {
    setTimeout(() => { $(".camera-area").css("height", contentHeight); }, AnimationTimer); //Open
    $(".select-area").css("height", "0"); //Close
};

function gotoproject() {
    setTimeout(() => { $(".project-area").css("height", contentHeight); }, AnimationTimer); //Open
    $(".select-area").css("height", "0"); //Close
};

function gotosetting() {
    setTimeout(() => { $(".setting-area").css("height", contentHeight); }, AnimationTimer); //Open
    $(".select-area").css("height", "0"); //Close
};

function gotoabout() {
    setTimeout(() => { $(".about-area").css("height", contentHeight); }, AnimationTimer); //Open
    $(".select-area").css("height", "0"); //Close
};


$(".back-to-menu-button").click( function(){
    var name = $(this).closest('div').attr("class").split(' ')[1];
    setTimeout(() => { $(".select-area").css("height", lobbyHeight); }, AnimationTimer);
    $(".chat-area").css("height", "0");
    $(`.${name}`).css("height", "0");
});

