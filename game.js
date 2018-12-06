



const game_Height=800;
const game_Width=1000;

var rightPressed=false;
var leftPressed=false;
var count=0;

//key listeners
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);



function keyDownHandler(e) {
  if(e.keyCode == 39) {
    rightPressed = true;
  }
  else if(e.keyCode == 37) {
    leftPressed = true;
  }
}
function keyUpHandler(e) {
  if(e.keyCode == 39) {
    rightPressed = false;
  }
  else if(e.keyCode == 37) {
    leftPressed = false;
  }
}


const gameState={
    playerx: 0,
    playery:0,
    alltraffic: [],
    
}

function inc(){
  count+=1;
}
function rand(){

return (Math.ceil((Math.random() *5))*140)+60;
}
function start(){
    const container= document.querySelector(".game")
    createPlayer(container)
    createTraffic(container)
}

function setposition(el,x,y){
    el.style.transform=`translate(${x}px , ${y}px)`;
}

function createTraffic(){
  const container= document.querySelector(".game")
  const element= document.createElement("img")
  element.src="Car.png";
  element.height=100;
  element.width=70;
  element.setAttribute("style", "position: absolute;")
  element.className="traffic";
  container.appendChild(element);
 var trafficx=rand();
 var trafficy=50;
  const traffic={element,trafficx,trafficy};

  gameState.alltraffic.push(traffic);
setposition(element,trafficx,trafficy);









}


function trafficmove(element){
  const container= document.querySelector(".game")
  
  console.log(gameState.alltraffic.trafficy)
    
  gameState.alltraffic.traffic.trafficy-=5

  setposition(gameState.alltraffic.traffic.element,gameState.alltraffic.traffic.trafficx,gameState.alltraffic.traffic.trafficy)
  
  }


function createPlayer(container){
gameState.playerx = 260;
gameState.playery =game_Height-100;
const player= document.createElement("img")
player.src= "gameCar.png";
player.height=100;
player.width=50;
setposition(player,gameState.playerx,gameState.playery)


player.className="player";
container.appendChild(player);

}

function presser(){
  if (leftPressed==true && gameState.playerx>120){
    gameState.playerx-=140;
  }
    else if (rightPressed==true && gameState.playerx<820){
       gameState.playerx+=140;
    }
      console.log(gameState.playerx)
      const player= document.querySelector(".player")
  setposition(player,gameState.playerx,gameState.playery);
}




start();
setInterval(createTraffic,1000)
setInterval(presser,100);
setInterval(trafficmove,10)
