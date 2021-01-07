function smyle() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    ctx.beginPath();
    
    
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); 
  
   
    ctx.moveTo(100, 75);
    ctx.arc(75, 75, 35, 0, Math.PI,  false) 
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); 
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); 
    ctx.stroke();
    
    
    
   
  
}

function drawChessboard() {
    // size of each chess square
    const squareSize = 50;
    // position of board's top left
    const boardTopx = 50;
    const boardTopy = 50;
    let canvas = document.getElementById("canvasChessboard");
    context = canvas.getContext("2d");
    for(let i=0; i<8; i++) {
      for(let j=0; j<8; j++) {
        context.fillStyle = ((i+j)%2==0) ? "white":"black";
        let xOffset = boardTopx + j*squareSize;
        let yOffset = boardTopy + i*squareSize;
        context.fillRect(xOffset, yOffset, squareSize, squareSize);
      }
    }
    // draw the border around the chessboard
    context.strokeStyle = "black";
    context.strokeRect(boardTopx, boardTopy, squareSize*8, squareSize*8)
  }


    
