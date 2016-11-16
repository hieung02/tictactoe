var boxSelected = document.getElementsByClassName("tGame");
var player ="X";
var xoPositions = [];
xoPositions.length = boxSelected.length;
var tTable = []; //double array
var xoBox0 = [];
var xoBox1 = [];
var xoBox2 = [];
var tieCount = 0;

var check = (t) => {
  for (var i = 0; i < 3; i++) {
      if (tTable[i][0] === t &&
          tTable[i][1] === t &&
          tTable[i][2] === t) {
          return console.log("Victory for " + t + "!");
      } else
      if (tTable[0][i] === t &&
          tTable[1][i] === t &&
          tTable[2][i] === t) {
          return console.log("Victory for " + t + "!");
      } else
      if (tTable[0][i] === t &&
          tTable[1][i + 1] === t &&
          tTable[2][i + 2] === t) {
          return console.log("Victory for " + t + "!");
      } else
      if (tTable[0][i + 2] === t &&
          tTable[1][i + 1] === t &&
          tTable[2][i] === t) {
          return console.log("Victory for " + t + "!");
      }
  }
  
  tieCount += 1;

  if(tieCount>=9){
    console.log("It's a tie game! Want to play again?")
  }
};

function createSubarray(index, xo){
  
  if(index < 3){
  xoBox0[index]= xo;
  }else if(index > 2 && index < 6){
    xoBox1[index-3] = xo;
    }else if(index > 5){
    xoBox2[index-6] = xo;
    }

tTable=[];
tTable.push(xoBox0);
tTable.push(xoBox1);
tTable.push(xoBox2);
check(xo);
}



for (var i = boxSelected.length - 1; i >= 0; i--) {  
    boxSelected[i].addEventListener('click', function() {
        if (this.innerText === "" && player === "X") {
            this.innerText = "X";
            this.style.color = "black";
						xoPositions[this.id-1] = "X";
            player = "O"
            createSubarray(this.id-1,"X")
        } else if (this.innerText === "" && player === "O") {
            this.innerText = "O";
            this.style.color = "orange";
            xoPositions[this.id-1] = "O";
            player = "X";
            createSubarray(this.id-1,"O")
        }
    });
}

