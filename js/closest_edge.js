let detected = document.getElementById('output-canvas');
// console.log("Nope");
var x_cor = 0;
var y_cor = 0;
detected.addEventListener("mousedown", function(e){
    let rect = detected.getBoundingClientRect(); 
    var x = Math.abs( Math.ceil(e.clientX - rect.left)); 
    var y = Math.abs(Math.ceil(e.clientY - rect.top)); 
    console.log("Coordinate x: " + x,
                "Coordinate y: " + y);
    var c1 = document.getElementById('output-canvas');
    var img = cv.imread(c1);

    var index = (y*img.cols + x)*4;

    
    for(var i=-5; i<5; i++){
        img.data[index+4*i] = 0;
        img.data[index+1+4*i] = 0;
        img.data[index+2+4*i] = 0;
    }
    // cv.circle(img, (x,y), 10, (0,0,255), -1)
    cv.imshow('output-canvas',img);
})