var canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
roverWidth=100
roverHeight=100
backgroundImage="floresta.jpg"
roverImage="tartaruga gritando.jpg"
roverY=300
roverx=400
function add(){
    backgroundImgTag=new Image();
    backgroundImgTag.onload=uploadBackground;
    backgroundImgTag.src=backgroundImage

    roverImgTag=new Image();
    roverImgTag.onload=uploadrover;
    roverImgTag.src=roverImage
}
function uploadBackground(){
    ctx.drawImage(backgroundImgTag,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(roverImgTag,roverx,roverY,roverWidth,roverHeight)    
}
window.addEventListener("keydown",myKeyDown);
function myKeyDown(e){
keyPressed=e.keyCode;
if(keyPressed=="38"){
    up()
    
}
if(keyPressed=="40"){
    down()
    
}
if(keyPressed=="37"){
    left()
    
}
if(keyPressed=="39"){
    right()
    
}
}
function up (){
 if(roverY>=0) {
    roverY=roverY-10;
    uploadBackground()
    uploadrover()
 }  
}
function down (){
    if(roverY<=500) {
       roverY=roverY+10;
       uploadBackground()
       uploadrover()
    } 
} 
function left (){
    if(roverx>=0) {
       roverx=roverx-10;
       uploadBackground()
       uploadrover()
    }  
}
function right (){
    if(roverx<=700) {
       roverx=roverx+10;
       uploadBackground()
       uploadrover()
    } 
} 
