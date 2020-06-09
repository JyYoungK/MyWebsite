var isPlaying = false;

// ------------------------------------------------Initial Settings------------------------------------------------
const Themes = Object.freeze({
    ARCADE: "theme-arcade",
    DARK: "theme-dark"
});

let settings = {
    theme: Themes.DARK
};

// ------------------------------------------------Theme Change------------------------------------------------
changeTheme(settings.theme);

/** Change the theme of the app
 * @param {string} newTheme theme-arcade or theme-dark
 **/

function changeTheme(newTheme) {
    if ($("body").hasClass(settings.theme)) {
        $("body").removeClass(settings.theme);
    }
    $("body").addClass(newTheme);
    settings.theme = newTheme;
}

function togglePlay() {
    if (isPlaying) {
        myAudio.pause();
    }
    else{
        myAudio.play();
    }
}

myAudio.onplaying = function(){
    isPlaying = true;
};
myAudio.onpause = function(){
    isPlaying = false;
};

$("#theme-button").click(() => {
    changeTheme((settings.theme === Themes.DARK ? Themes.ARCADE : Themes.DARK));
});

$("#sound-button").click(() => {
    togglePlay();
})