document.getElementById('image-upload').onchange = function(e) {
    var img = new Image();
    img.onload = draw;
    img.onerror = failed;
    img.src = URL.createObjectURL(this.files[0]);
};
function draw() {
    var canvas = document.getElementById('input-canvas');
    canvas.width = 640;
    canvas.height = 300;
    console.log(this.src);
    var ctx = canvas.getContext('2d');
    ctx.drawImage(this, 0,0);
    var imgSrc = this.src;
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    edge_detection(imgData, canvas.height, canvas.width, canvas);
}
function failed() {
    console.error("The provided file couldn't be loaded as an Image media");
}

function edge_detection(image_data, height, width, src) {
    var out = [];
    let dst = new cv.Mat();
    // console.log("image_source", image_data)
    let image = cv.imread(src);
    // console.log(image);
    cv.cvtColor(image, image, cv.COLOR_RGB2GRAY, 0) //Converting Image to GrayScale
    cv.Canny(image,dst, 50, 150, 3, false) // Performing Canny Edge Detection
    console.log(dst);
    cv.imshow('output-canvas', dst);
    image.delete();
    dst.delete();
    // document.getElementById("detection_indicator").style.visibility = "visible";
    output_canvas();
    // dst.delete()
}