// console.log('hey there!!');

var canvas = new fabric.Canvas('canvas');

const imgAdded = function(e){
    // console.log(e);
    const inputFilem = document.getElementById('pic');
    const file = inputFilem.files[0];

    reader.readAsDataURL(file);
}

const reader = new FileReader();

const inputFile = document.getElementById('pic');
inputFile.addEventListener('change', imgAdded);

reader.addEventListener("load", function(){
    fabric.Image.fromURL(reader.result, function(img){
        canvas.add(img);
        img.scaleToHeight(500);
        img.scaleToWidth(500);
        canvas.requestRenderAll();
    });
});

canvas.on('mouse:wheel', function(opt) {
    var delta = opt.e.deltaY;
    var zoom = canvas.getZoom();
    zoom *= 0.999 ** delta;
    if (zoom > 20) zoom = 20;
    if (zoom < 0.01) zoom = 0.01;

    const center = canvas.getCenter();
    const centerPoint = new fabric.Point(center.left, center.top);

    canvas.zoomToPoint(centerPoint, zoom);
    // opt.e.preventDefault();
    // opt.e.stopPropagation();
  });