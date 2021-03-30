document.getElementById('image-upload').onchange = function(e) {
    const file = this.files[0];
    // console.log(file);
    if (file){
        let reader = new FileReader();
        reader.onload = function(event){
            // console.log(event.target.result);
            $('#imgPreview').attr('src', event.target.result);
        }
        reader.readAsDataURL(file);
    }
    var img = new Image();
    img.onload = draw;
    img.onerror = failed;
    img.src = URL.createObjectURL(this.files[0]);
};
function draw() {
    var canvas = document.getElementById('input-canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    // console.log(this.src);
    var ctx = canvas.getContext('2d');
    ctx.drawImage(this, 0,0);
    edge_detection(canvas);
}
function failed() {
    console.error("The provided file couldn't be loaded as an Image media");
}

function edge_detection(canvas) {
    let dst = new cv.Mat();
    // console.log("image_source", image_data)
    let image = cv.imread(canvas);
    // console.log(image);
    cv.cvtColor(image, image, cv.COLOR_RGB2GRAY, 0) //Converting Image to GrayScale
    cv.Canny(image,dst, 50, 150, 3, false) // Performing Canny Edge Detection

    // Storing the edges detected on a canvas, will be used to read edges
    cv.imshow('edge-canvas', dst);
    
    // freeding data
    image.delete();
    dst.delete();

    //Changing status of visibility indicator
    document.getElementById("detection_indicator").style.visibility = "visible";
    
    // Since edges have been detected we turn to change the original image and drawing the edge on it
    output_canvas();
}