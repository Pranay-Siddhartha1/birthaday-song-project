var canvas = new fabric.Canvas('MyCanvas');
 var x= document.getElementById("myAudio");
block_image="";
function new_image()
{
fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
    block_image=Img;
    block_image.scaleToWidth(800);
    block_image.scaleToHeight(600);
    block_image.set({
        top:0,
        left:0
    });
    canvas.add(block_image);
})	;
	
}

function start_song(){
x.play();
}
