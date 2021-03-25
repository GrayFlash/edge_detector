let detected = document.getElementById('output-canvas');
// console.log("Nope");
var x_cor = 0;
var y_cor = 0;
detected.addEventListener("mousedown", function(e){
    let rect = detected.getBoundingClientRect(); 
    let x = e.clientX - rect.left; 
    let y = e.clientY - rect.top -0.1875; 
    console.log("Coordinate x: " + x,
                "Coordinate y: " + y);
    
    
})