let detected = document.getElementById('output-canvas');
// console.log("Nope");
detected.addEventListener("mousedown", function(e){
    let rect = detected.getBoundingClientRect(); 
    let x = e.clientX - rect.left; 
    let y = e.clientY - rect.top; 
    console.log("Coordinate x: " + x,
                "Coordinate y: " + y);
})