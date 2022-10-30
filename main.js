function preload() {
	world_start = loadSound("world_start.wav");
	mario_gameOver = loadSound("gameover.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas");

	video = createCapture(VIDEO);
	video.size(800 , 400);
	video.parent("game_console");
	canvas.center();

	poseNet = ml5.poseNet(video, modelloaded);
	poseNet.on("pose", gotResult)
}

function modelloaded()
{
	console.log("Model Is Intialized");
}

function gotResult(results)
{
	if(results.length > 0)
	{
		console.log(results);
		noseX= results[0].pose.nose.x;
		noseY= results[0].pose.nose.y;
		console.log("Nose X = " + noseX + ", Nose Y = " + noseY);
	}
}

function draw() {
	game();
}