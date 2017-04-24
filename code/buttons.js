
function Button(x,y,width,height,text){
  this.x = x
  this.y = y
  this.width = width
  this.height = height
  this.text = text
  this.selected = false
}

function ButtonW(x,y,width,height,text,asp,add,rec,ga,no){
  this.x = x
  this.y = y
  this.width = width
  this.height = height
  this.text = text
  this.aspect = asp
  this.add = add
  this.no = no
  this.rec = rec
  this.ga = ga
  this.selected = false
}

var PnM = []
var pm = []
function PlusNMinus(x,y,no,rec){
  this.x = x
  this.y = y
  this.width = 25
  this.no = no
  this.asp
  this.ga
  this.rec = rec
  pm.push(this)
}

ButtonW.prototype.resetMemes = function(){
  if(this.no == 0) currentNewPlanet.gravity = this.aspect
  if(this.no == 1) currentNewPlanet.ozone = this.aspect
  if(this.no == 2) currentNewPlanet.radiation = this.aspect
  if(this.no == 3) currentNewPlanet.SpF = this.aspect
  if(this.no == 4) currentNewPlanet.SpM = this.aspect
  if(this.no == 5) currentNewPlanet.SpU = this.aspect
}



PlusNMinus.prototype.updateAsp = function(){
  if(this.no == 0){
    this.asp = currentNewPlanet.gravity
  }
  if(this.no == 1){
    this.asp = currentNewPlanet.ozone
  }
  if(this.no == 2){
    this.asp = currentNewPlanet.radiation
  }
  if(this.no == 3){
    this.asp = currentNewPlanet.SpF
    this.ga = food
  }
  if(this.no == 4){
    this.asp = currentNewPlanet.SpM
    this.ga = minerals
  }
  if(this.no == 5){
    this.asp = currentNewPlanet.SpU
    this.ga = uranium
  }
  PnM.push(new ButtonW(this.x,this.y+40,this.width,this.width,'+',this.asp,true,this.rec,this.ga,this.no))
  PnM.push(new ButtonW(this.x+115-25,this.y+40,this.width,this.width,'-',this.asp,false,this.rec,this.ga,this.no))
}


function CButton(x,y,r){
  this.x = x
  this.y = y
  this.r = r
}

Button.prototype.render = function(){
  c.font = '30px PixelFont'
  c.fillStyle = boxC
  c.fillRect(this.x,this.y,this.width,this.height)
  c.fillStyle = textC
  var textWidth = this.text.length * 5
  c.fillText(this.text,this.x+(this.width/2-textWidth),this.y+this.height/1.8+4)
}

ButtonW.prototype.render = function(){
  c.font = '30px PixelFont'
  c.fillStyle = boxC
  c.fillRect(this.x,this.y,this.width,this.height)
  c.fillStyle = textC
  var textWidth = this.text.length * 5
  c.fillText(this.text,this.x+(this.width/2-textWidth),this.y+this.height/1.8+4)
}

Button.prototype.renderS = function(){
  c.font = '20px PixelFont'
  if(this.selected==true){
    c.fillStyle = 'rgb(154, 9, 5)'
    c.fillRect(this.x-2,this.y-2,this.width+4,this.height+4)
  }
  c.fillStyle = 'white'
  c.fillRect(this.x,this.y,this.width,this.height)
  c.fillStyle = textC
  var textWidth = this.text.length * 4
  c.fillText(this.text,this.x+(this.width/2-textWidth),this.y+this.height/1.8+4)
}



function wrapText(text, x, y, maxWidth, lineHeight) {
  var words = text.split(' ');
  var line = '';
  var lineNo = 0
  var startX = x
  var startY = y

  for(var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + ' ';
    var metrics = c.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      c.fillText(line, x, y);
      line = words[n] + ' ';
      y += lineHeight;
      lineNo ++
    }
    else {
      line = testLine;
    }
  }
  c.fillText(line, x, y);
}
