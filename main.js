status = "";

function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    objectDetector = objectDetector("cocossd", modelLoaded);
}

function start() {
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    video.speed(1);
    video.volume(0);
}

function draw() {
    image(video, 0, 0, 640, 480);
}