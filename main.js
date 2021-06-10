leftWristx=0;
rightWristx=0;
difference=0;
function preload(){

};
function setup(){
    Video=createCapture(VIDEO);
    Video.size(550,500);

    canvas=createCanvas(550,500)
    canvas.position(560,100);

    poseNet=ml5.poseNet(Video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("Pose Net is Initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristx=results[0].pose.leftWrist.x;
        rightWristx=results[0].pose.rightWrist.x;
        difference=floor(leftWristx-rightWristx);
        console.log("left Wrist x= "+leftWristx+" right wrist x= "+rightWristx+" difference= "+difference);
    }
}

function draw()
 { background('#969A97');
  document.getElementById("fontsize").innerHTML = "font size of text is = " + difference +"px";
  text('Shourya',10,480);
  textSize(difference)
 }
