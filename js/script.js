function update(previewPic){

    console.log("Mouse over event triggered");
    console.log("Image source:", previewPic.src);
    console.log("Image alt:", previewPic.alt);

    document.getElementById("message").innerHTML = previewPic.alt;

    document.getElementById("message").style.backgroundImage ="url('" + previewPic.src+ "')";
}

function unDo(){

    document.getElementById("message").style.backgroundImage ="url('')";

    document.getElementById("message").innerHTML ="Hover over an image below to display here.";
}