$(document).ready(function(){
    var canvas  = $("#c");
    var cx = canvas.get(0).getContext("2d");


    function update() {

    }

    function draw() {

    }

    function render() {
        update();
        draw();
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render)
});