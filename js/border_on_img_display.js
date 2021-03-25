function output_canvas() {
    var c1 = document.getElementById('input-canvas');
    var c2 = document.getElementById('output-canvas');
    let img = cv.imread(c1);
    let edges = cv.imread(c2);
    var row = img.rows;
    var col = img.cols;
    for(var x=0; x<row; ++x){
        for(var y=0; y<col; ++y){
            var index = (x*col+y)*4;
            if(edges.data[index] + edges.data[index+1]+ edges.data[index+2] == 0){
                continue;
            }

            img.data[index] = 0;
            img.data[index+1] = 0;
            img.data[index+2] = 0;
            img.data[index+3] = 255;
        }
    }
    cv.imshow("output-canvas", img);

    img.delete();
    edges.delete();
}