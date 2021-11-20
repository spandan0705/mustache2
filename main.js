noseX=0;
noseY=0;

function preload()
{
    clown_nose=loadImage('mustache.png');
}

function setup()
    {
        canvas=createCanvas(300, 300);
        canvas.center();
        video= createCapture(VIDEO);
        video.hide();
        video.size(300, 300);

        poseNet=ml5.poseNet(video, modelLoaded);
        poseNet.on('pose', gotPoses);
    }

    function gotPoses(results)
        {
            if(results.lengthh > 0)
            {
                console.log(results);
                noseX=results[0].pose.nose.x-5;
                noseY=results[0].pose.nose.y-5;
                console.log("nose x = " + results[0].pose.nose.x);
                console.log("nose y = " + results[0].pose.nose.y);
            }
        }
    

    function modelLoaded()
    {
        console.log('PoseNet Is Initialized');
    }

    function draw()
    {
        image(video, 0,  0, 300, 300);
        image(clown_nose, noseX, noseY, 30, 30);
    }

    function take_snapshot()
    {
        save('myFilterImage.png');
    }