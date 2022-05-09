let dans_le_train_installation, cuicui_soir_stn, riviere_proche, cuicui_court,
    dans_le_train_roule, gare_train_arrive, gare_1, riviere_cuicui, cuicui_cour_raw,
    riviere_barage, dans_le_train, riviere_cuicui_stn, cuicui_venteux, en_voiture1, gare_2, gare_3, dans_le_train_3;

function preload() {

    soundFormats('wav');
    cuicui_soir_stn.wav = loadSound('assets/sounds/cuicui_soir_stn');
    dans_le_train_installation.wav = loadSound('assets/sounds/dans_le_train_installation');
    riviere_proche.wav = loadSound('assets/sounds/riviere_proche');
    cuicui_court.wav = loadSound('assets/sounds/cuicui_court');
    dans_le_train_roule.wav = loadSound('assets/sounds/dans_le_train_roule');
    gare_train_arrive.wav = loadSound('assets/sounds/gare_train_arrive');
    gare_1.wav = loadSound('assets/sounds/gare_1');
    riviere_cuicui.wav = loadSound('assets/sounds/riviere_cuicui');
    cuicui_cour_raw.wav = loadSound('assets/sounds/cuicui_cour_ raw');
    riviere_barage.wav = loadSound('assets/sounds/riviere_barage');
    dans_le_train.wav = loadSound('assets/sounds/dans_le_train');
    riviere_cuicui_stn.wav = loadSound('assets/sounds/riviere_cuicui_stn');
    cuicui_venteux.wav = loadSound('assets/sounds/cuicui_venteux');
    en_voiture1.wav = loadSound('assets/sounds/en_voiture1');
    gare_2.wav = loadSound('assets/sounds/gare_2');
    gare_3.wav = loadSound('assets/sounds/gare_3');
    dans_le_train_3.wav = loadSound('assets/sounds/dans_le_train_3');
}


let r,g,b,a;
function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    background(124,123,120);
    r = 255;
    g = 109;
    b = 18;
    a = 25;

    cnv.mousePressed(canvasPressed);
}

function draw() {
    text('Du son, du son !', 20, 20);
    let maxX, maxY;

    fill(r,g,b, a);
    ellipse(Math.floor(Math.random() * maxX), Math.floor(Math.random() * maxY), 200, 200); // randomly place an ellipse
    // the problem is that this way I can't know which one was pressed :(

    // sinon : uniquement une visualisation semi random et le son est random. Le titre du son s'affiche sur l'écran et
    // les titres s'empilent.
}

function canvasPressed() {
    // playing a sound file on a user gesture
    // is equivalent to `userStartAudio()`
    // this is where I will check if the canvas has been pressed in a circle, which one, and then play the associated sound

    let da = dist(mouseX, mouseY, 205, 205); //checking the dist between the mouse and the circle's center
    if (da < 100) {
        pressedPlay(cuicuiVent);
    }

    let db = dist(mouseX, mouseY, 410, 205)
    if (db < 100) {
        pressedPlay(dansTrain1);
    }

}



function pressedPlay(sound) {
    if (sound.isPlaying()) {
        // .isPlaying() returns a boolean
        sound.stop();
        r = 255;
        g = 109;
        b = 18;
    } else {
        sound.play();
        sound.loop();
        r = 28;
        g = 148;
        b = 139;
    }
}


/**
 function canvasPressed() {
    // playing a sound file on a user gesture
    // is equivalent to `userStartAudio()`
    //this is where I will check if the canvas has been pressed in a circle, which one, and then play the associated sound
    if (cuicuiVent.isPlaying()) {
        // .isPlaying() returns a boolean
        cuicuiVent.stop();
        background(255, 109, 18);
        text('cuicui venteux', 10, 20);
    } else {
        cuicuiVent.play();
        cuicuiVent.loop();
        background(28, 148, 139);
        text('cuicui venteux', 10, 20);
    }
}**/
