let riviere_cuicui_stn, gare_train_arrive, riviere_cuicui, gare_2, gare_3, cuicui_venteux, gare_1, dans_le_train_3, dans_le_train_installation, cuicui_soir_stn, en_voiture1, dans_le_train_roule, cuicui_court, riviere_proche, dans_le_train, riviere_barage, ;
const sound_array = [];

function preload() {

    soundFormats('mp3');
    gare_train_arrive = loadSound('assets/sounds/gare_train_arrive');
    riviere_cuicui = loadSound('assets/sounds/riviere_cuicui');
    gare_2 = loadSound('assets/sounds/gare_2');
    gare_3 = loadSound('assets/sounds/gare_3');
    cuicui_venteux = loadSound('assets/sounds/cuicui_venteux');
    gare_1 = loadSound('assets/sounds/gare_1');
    dans_le_train_3 = loadSound('assets/sounds/dans_le_train_3');
    dans_le_train_installation = loadSound('assets/sounds/dans_le_train_installation');
    cuicui_soir_stn = loadSound('assets/sounds/cuicui_soir_stn');
    en_voiture1 = loadSound('assets/sounds/en_voiture1');
    dans_le_train_roule = loadSound('assets/sounds/dans_le_train_roule');
    cuicui_court = loadSound('assets/sounds/cuicui_court');
    riviere_proche = loadSound('assets/sounds/riviere_proche');
    dans_le_train = loadSound('assets/sounds/dans_le_train');
    riviere_barage = loadSound('assets/sounds/riviere_barage');
    sound_array[0] = gare_train_arrive;
    sound_array[1] = riviere_cuicui;
    sound_array[2] = gare_2;
    sound_array[3] = gare_3;
    sound_array[4] = cuicui_venteux;
    sound_array[5] = gare_1;
    sound_array[6] = dans_le_train_3;
    sound_array[7] = dans_le_train_installation;
    sound_array[8] = cuicui_soir_stn;
    sound_array[9] = en_voiture1;
    sound_array[10] = dans_le_train_roule;
    sound_array[11] = cuicui_court;
    sound_array[12] = riviere_proche;
    sound_array[13] = dans_le_train;
    sound_array[14] = riviere_barage;
}

let r,g,b,a; 

function setup() { 

    let cnv = createCanvas(windowWidth, windowHeight); 

    r = 255; 

    g = 109; 

    b = 18; 

    a = 25; 

    cnv.mousePressed(canvasPressed); 

} 

    
function draw() { 

    fill(r,g,b, a); 

    text('Du son, du son !', 20, 20); 

    // Draw circles hehe
    