objectDetector = "";
    img = "";
    objects = [];
    status = "";

    function preload()
{
img = loadImage('kitchen.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw()
{
    image( img, 0, 0, 640, 420);
    if(status != "")
    {  
     
      for (var i = 0; i < objects.length; i++)
      {
        document.getElementById("status").innerHTML = "Status: Object detected";
        fill(234, 0, 0);
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 5, objects[i].y + 15);
        noFill();
        stroke(234, 0, 0);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
    }

  
}