canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var nasa_mars_img_array = ["nasa_img1.jpg", "nasa_img2.jpg", "nasa_img3.jpg", "nasa_img4.jpg"];
var random_number = Math.floor(Math.random() * 4);
console.log(random_number);
var rover_width = 100;
var rover_height = 90;
var background_image = nasa_mars_img_array[random_number];
console.log("background image = " + background_image);
var rover_image = "rover.png";
var rover_x = 10;
var rover_y = 10;

function add(){
    background_imageTag = new Image();  
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;

    rover_imageTag = new Image();
    rover_imageTag.onload = uploadrover;
    rover_imageTag.src = rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imageTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    var keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38'){
       console.log('up');
       up();
    }
    if(keyPressed == '40'){
        down();
        console.log('down');
    }
    if (keyPressed == '37'){
        left();
        console.log('left');
    }
    if (keyPressed == '39'){
        right();
        console.log('right');
    }
}
function down(){ 
    if(rover_y <= 500){
        rover_y  = rover_y +10;
        console.log("When down arrow is pressed x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}
function left(){
    if(rover_x >= 0){
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}
function right(){
    if (rover_x <= 700){
        rover_x =rover_x + 10;
        console.log("When right arrow is pressed x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
} 
function up(){
    if(rover_y >= 0){
        rover_y = rover_y -10;
        console.log("When up arrow is pressed x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}