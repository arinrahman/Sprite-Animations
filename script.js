const canvas= document.getElementById("canvas1");
/* returns a 2D drawing context and 
allows to draw 2 dimentional 
shapes, text, images, and animations */
const context= canvas.getContext("2d"); 
/* adding canvas height and width*/
const CANVAS_WIDTH= canvas.width= 600;
const CANVAS_HEIGHT= canvas.height= 600;
const spriteWidth= 575; /* the width of player image*/
const spriteHeight= 523; /* the height of player image*/
let frameX=0;
let frameY=0;
let gameframe=0;
const staggerframe=5;


/* console.log(context)*/
/*to inspect*/
/*we'll focus more on the drawImage method */


/*to bring image in the spript.js file I will 
declare a custom variable called playerImage*/

/*new Image() allows me to create a new image object 
that will allow me to load image and modify it*/

/*new Image is a built in JS constructor
it is a short form for 
const playerImage=document.createElement("img")
*/


const playerImage= new Image();
playerImage.src= "shadow_dog.png"
let x=0;
/*
let's create a function called animation 
*/
/*
this is the animation loop 
*/

function Animation()
{
    /*
    I will clear old paint from canvas between any 
    animation frame using the clearRect() method which takes
    four arguments that specify which area of the canvas I want 
    to clear; as I want to clear the entire canvas so I will 
    take 0,0, CANVAS_WIDTH, CANVAS_HEIGHT */

    context.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);

    /*let's draw a rectangle with position 50,50 and height and width 100,100
    context.fillRect(50,50,100,100);
    */
    
    
     /*
    I replaced the first argument of the method fillRect with x 
     context.fillRect(x,50,100,100);
    */
    
    
    /*
    Everytime loop runs the position is increased by 1
    */
    /*
    x++;
    */

    /*the drawImage method allows us to have control over our image;
    it can take upto 3,5 or 9 rguments; 
    in case of three arguments, the first argument is the name of the image, 
    the second and third arguments are x and y respectively, 
    if x and y are both taken to be zero, 
    the image will be drawn at top left corner;
    the image is also kept at original width and height;
    when there are 5 arguments, changing the fourth and fifth 
    context.drawImage(playerImage,0,0, 6650,5800 );
    arguments zooms in and zooms out the image;
    incase of nine arguments, we have the most control over the image 

    context.drawImage(image_itself, source_x, sourse_y, ssource_w, source_h, destination_x,  destination_y, destination_w,  destination_h);


    */
    context.drawImage(playerImage, frameX*spriteWidth,frameY*spriteHeight,spriteWidth, spriteHeight,0,0, spriteWidth, spriteHeight);
    if(gameframe% staggerframe==0)
    {
        if (frameX <6)frameX++;
        else frameX=0;    
    }
    gameframe++;
    /*requestAnimateFrame is a built in 
    frame to  which if the function name, in this case, Animation is passed, the 
    function animate will run over and over and animate it*/
  
    requestAnimationFrame(Animation);

};
/*call the function Animation*/
Animation();

