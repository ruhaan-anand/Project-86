var canvas = new fabric.Canvas("myCanvas")
var faceW = 70, faceH = 100, faceX = 500, faceY = 100, playerX = 500, playerY = 300;

var bodyW = 200, bodyH = 200, bodyX = 500, bodyY = 300;

var rightarmW = 200, rightarmH = 100, rightarmX = 300, rightarmY = 150; 

var leftarmW = 200, leftarmH = 100, leftarmX = 700, leftarmY = 150;

var legsW = 200, legsH = 200, legsX = 500, legsY = 500;

var player, face, body, legs, leftarm, rightarm;

function uploadPlayer(){
    fabric.Image.fromURL("player.png",function(img){
        player = img;
        player.scaleToWidth(70);
        player.scaleToHeight(120);
        player.set({top: playerY, left: playerX});
        canvas.add(player)
    });
}
uploadPlayer();