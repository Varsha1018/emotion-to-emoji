prediction_1 = ""
prediction_2 = ""

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:100
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function Capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='picture' src='"+data_uri+"'>";
    });
}

console.log("ml5 version:",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/lLQkrRV3z/model.json',modellodded);

function modellodded(){
    console.log("model lodded");
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The first prediction is"+prediction_1;
    speak_data_2="And the second prediction is"+prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}

function check(){
    img=document.getElementById("picture");
    classifier.classify(img, gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{console.log(results);
    document.getElementById("emotion-1").innerHTML=results[0].label;
    document.getElementById("emotion-2").innerHTML=results[1].label;
    prediction_1=results[0].label;
    prediction_2=results[1].label;
    speak();

    if(results[0].label=="Happy"){
        document.getElementById("emoji-1").innerHTML="&#128522";
    }

    
    if(results[0].label=="Sad"){
        document.getElementById("emoji-1").innerHTML="&#128532";
    }

    if(results[0].label=="Angry"){
        document.getElementById("emoji-1").innerHTML="&#128548";
    }

    if(results[1].label=="Happy"){
        document.getElementById("emoji-2").innerHTML="&#128522";
    }

    if(results[1].label=="Sad"){
        document.getElementById("emoji-2").innerHTML="&#128532";
    }

    if(results[1].label=="Angry"){
        document.getElementById("emoji-2").innerHTML="&#128548";
    }

    }
    
}




