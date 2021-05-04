function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    fill("deeppink");
    stroke("deeppink");
    rect(90, 60, 430, 20);
    rect(90, 420, 430, 20);
    rect(60, 90, 20, 300);
    rect(550, 90, 20, 300);
    fill(" black");
    stroke("black");
    circle(60, 60, 70);
    circle(550, 420, 70);
    circle(60, 420, 70);
    circle(550, 60, 70);
    image(video, 150, 125, 320, 240);
}

function take_snapshot()
{
    save('student.png')
}