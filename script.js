const canvas= document.getElementById("canvas1");
/* returns a 2D drawing context and 
allows to draw 2 dimentional 
shapes, text, images, and animations */
const context= canvas.getContext("2d"); 
/* adding canvas height and width*/
const CANVAS_WIDTH= canvas.width= 600;
const CANVAS_HEIGHT= canvas.height= 600;

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

    /*let's draw a rectangle with position 50,50 and height and width 100,100*/
    /*
    I replaced the first argument of the method fillRect with x 
    */
    context.fillRect(x,50,100,100);
    
    /*
    Everytime loop runs the position is increased by 1
    */
    x++;
    /*requestAnimateFrame is a built in 
    frame to  which if the function name, in this case, Animation is passed, the 
    function animate will run over and over and animate it*/
    requestAnimationFrame(Animation);

};
/*call the function Animation*/
Animation();

