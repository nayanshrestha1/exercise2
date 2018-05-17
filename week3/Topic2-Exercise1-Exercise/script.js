// function changeOpacity(){
// 	var circle = document.getElementById('circle');
// 	currentleft= parseInt(circle.offsetLeft);
//      circle.style.left =currentleft -10 + 'px';
 //	var currentopacity= parseFloat(circle.style.opacity);
 //circle.style.background ='green';
 //if(currentopacity <1){
 //circle.style.opacity= currentopacity+0.05;
//}
//}
function moveleft()
{
	var circle = document.getElementById('circle');
	currentleft= parseInt(circle.offsetLeft);
  // if (currentleft==0){
  //     clearInterval(interval);
  //     interval =setInterval(moveright,5)
  //   }
  //   else{
    circle.style.left = currentleft - 1 + 'px';
// }
}
function moveright()
{
	var circle = document.getElementById('circle');
	currentleft= parseInt(circle.offsetLeft);
  // if (window.innerWidth == currentleft + 200){
  //     clearInterval(interval);
  //     interval =setInterval(moveleft,5)
  //   }
  //   else{
    circle.style.left = currentleft + 1 + 'px';
  // }

}
function moveup()
{
	var circle = document.getElementById('circle');
	currentup= parseInt(circle.offsetTop);
    // if (currentup == 0){
    // 	clearInterval(interval);
    // 	interval =setInterval(movedown,5)
    // }
    // else{
    	circle.style.top = currentup - 1 + 'px';
    //}

}
function movedown()
{
	var circle = document.getElementById('circle');
	currentup= parseInt(circle.offsetTop);
    // if (window.innerHeight == currentup + 200)
    // {
    // 	clearInterval(interval);
    // 	interval = setInterval(moveup, 5)
    // }
    // else
    // 	{
    		circle.style.top = currentup + 1 + 'px';
    	// }

}
var interval;
var leftPressed = false; var rightPressed = false;
var topPressed =false; var downPressed = false;
function myKeyDown(event){
  if(event.keyCode == 37){leftPressed = true;}
  if(event.keyCode == 39){rightPressed = true;}
  if(event.keyCode == 38){topPressed = true;}
  if(event.keyCode == 40){downPressed = true;}
}
function myKeyUp(event){
  if (event.keyCode == 37) {leftPressed = false;}
  if (event.keyCode == 39) {rightPressed = false;}
  if (event.keyCode == 38) {topPressed = false;}
  if (event.keyCode == 40) {downPressed = false;}
}
function animation(){
  if(leftPressed == true) moveleft();
  if(rightPressed == true) moveright();
  if(topPressed == true) moveup();
  if(downPressed == true) movedown();
}


//   function clickFunction(event){
//   	clearInterval(interval);
//   	if(event.keyCode== 37){
//  	 // moveleft();
//   	 // interval= setInterval(moveleft,5);
//      leftPressed = true;
//   	}
//   	if(event.keyCode== 39)
//   	{ 
//   		// moveright();
//   		 //interval= setInterval(moveright,5);
//         rightPressed = true;
//  	}
//   	if(event.keyCode== 38)
//  	{ 
// 	// moveup();
//   //interval= setInterval(moveup,5);
//   topPressed = true;
//     }
//   	if(event.keyCode== 40)
//   	{ 
// // movedown();
//   //		 interval= setInterval(movedown,5);
//   	 downPressed = true;
//     }
//  }
//  function animation(){
//   if (leftPressed == true)
//     moveleft();
//  }

 // function clickFunction(){
 // 	setInterval(changeOpacity, 100);
 	
 //}
 // function myFunction(){
 	// var circle = document.getElementById('circle');
 	// circle.addEventListener('click',clickFunction);
 	// document.addEventListener('keydown',clickFunction);
 	//circle.style.opacity='0.5';
document.addEventListener('keydown',myKeyDown);
document.addEventListener('keyup',myKeyUp);
interval = setInterval(animation,5);
 document.addEventListener('DOMContentLoaded', myFunction);