function output_canvas() {
    var in_canvas = document.getElementById('input-canvas');
    var edgy_canvas = document.getElementById('edge-canvas');
    let img = cv.imread(in_canvas);
    let edges = cv.imread(edgy_canvas);
    let e2 = edges;
    var row = img.rows;
    var col = img.cols;
    for(var x=0; x<row; ++x){
        for(var y=0; y<col; ++y){
            var index = (x*col+y)*4;
            if(edges.data[index] + edges.data[index+1]+ edges.data[index+2] == 0){
                e2.data[index] = 255;
                e2.data[index+1] = 255;
                e2.data[index+2] = 255;
                e2.data[index+3] = 255;
                continue;
            }

            img.data[index] = 0;
            img.data[index+1] = 0;
            img.data[index+2] = 0;
            img.data[index+3] = 255;

            e2.data[index] = 0;
            e2.data[index+1] = 0;
            e2.data[index+2] = 0;
            e2.data[index+3] = 255;
        }
    }
    cv.imshow("output-canvas", img);
    cv.imshow("edge-canvas", e2);

    img.delete();
    edges.delete();
}