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

    var out_canvas = document.getElementById('output-canvas');
    var img = cv.imread(out_canvas);

    var edgy_canvas = document.getElementById('edge-canvas');
    var edges = cv.imread(edgy_canvas);

    // cv.imshow('output-canvas',img);
    var min_x=0;
    var min_y=0;
    var row = img.rows;
    var col = img.cols;
    var min_dis = -1;
    for(var i=0; i<row; ++i){
        for(var j=0; j<col; ++j){
            var index = (i*col+j)*4;
            if(edges.data[index] + edges.data[index+1]+ edges.data[index+2] == 0){
                var x_i = j;
                var y_i = i;

                var dis = Math.sqrt((x-x_i)*(x-x_i) + (y-y_i)*(y-y_i));

                if(dis<min_dis || min_dis==-1) {
                    min_dis = dis;
                    min_x = x_i;
                    min_y = y_i;
                }
            }
        }
    }
    var ctx = out_canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(min_x, min_y);
    ctx.lineWidth = 5;
    ctx.stroke();
    // console.log(min_dis, min_x, min_y);
})