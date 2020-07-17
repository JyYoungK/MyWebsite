// window.addEventListener('load', gotoabout); //starts off About Me

var li = $('li');
var liSelected;
//Stay 50~80%
const heights = {
    select : "50%",
    chat : "60%",
    corona : "60%",
    game: "30%",
    poker : "85%",
    reinforce : "50%",
    camera : "75%",
    project : "80%",
    setting : "50%",
    about : "60%",
    credit : "60%",
};
// const contentHeight = "80%";

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
                name = "chat";
                break;
            case "option2":
                name = "corona";
                break;
            case "option3":
                name = "poker";
                break;
            case "option4":
                name = "camera";
                break;
            case "option5":
                name = "project";
                break;
            case "option6":
                name = "setting";
                break;
            case "option7":
                name = "about";
                break;
            case "option8":
                name = "credit";
                break;
        }
        setTimeout(() => { $(`.${name}`).css("height", heights[name])}, AnimationTimer); //Open
        $(".select").css("height", "0"); //Close
    }
});

function gotochat() {
    setTimeout(() => { $(".chat").css("height", heights.chat); }, AnimationTimer); //Open
    $(".select").css("height", "0"); //Close
};

function gotocorona() {
    setTimeout(() => { $(".corona").css("height", heights.corona); }, AnimationTimer); //Open
    $(".select").css("height", "0"); //Close
};

function gotogame() {
    setTimeout(() => { $(".game").css("height", heights.game); }, AnimationTimer); //Open
    $(".select").css("height", "0"); //Close
};

function gotopoker() {
    setTimeout(() => { $(".poker").css("height", heights.poker); }, AnimationTimer); //Open
    $(".game").css("height", "0"); //Close
};
function gotoreinforce() {
    setTimeout(() => { $(".reinforce").css("height", heights.reinforce); }, AnimationTimer); //Open
    $(".game").css("height", "0"); //Close
};

function gotocamera() {
    setTimeout(() => { $(".camera").css("height", heights.camera); }, AnimationTimer); //Open
    $(".select").css("height", "0"); //Close
};

function gotoproject() {
    setTimeout(() => { $(".project").css("height", heights.project); }, AnimationTimer); //Open
    $(".select").css("height", "0"); //Close
};

function gotosetting() {
    setTimeout(() => { $(".setting").css("height", heights.setting); }, AnimationTimer); //Open
    $(".select").css("height", "0"); //Close
};

function gotoabout() {
    setTimeout(() => { $(".about").css("height", heights.about); }, AnimationTimer); //Open
    $(".select").css("height", "0"); //Close
};

function gotocredit() {
    setTimeout(() => { $(".credit").css("height", heights.credit); }, AnimationTimer); //Open
    $(".select").css("height", "0"); //Close
};


$(".back-to-menu-button").click( function(){
    var name = $(this).closest('div').attr("class").split(' ')[1];
    setTimeout(() => { $(".select").css("height", heights.select); }, AnimationTimer);
    $(".chat").css("height", "0");
    $(".poker").css("height", "0");
    $(".reinforce").css("height", "0");
    $(`.${name}`).css("height", "0");
});

