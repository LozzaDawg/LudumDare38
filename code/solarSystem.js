
function SolarSystem(x,y,dist){
  this.x = x
  this.y = y
  this.dist = dist
  this.planets = []
}



SolarSystem.prototype.render = function(){
  for(var i = 0; i < stars.length; i++){
    stars[i].render()
  }
  c.fillStyle = 'rgba(255, 168, 0, 0.30)'
  c.beginPath()
  c.arc(this.x,this.y,250,0,2*Math.PI)
  c.fill()
  c.fillStyle = 'rgba(255, 168, 0, 0.25)'
  c.beginPath()
  c.arc(this.x,this.y,160,0,2*Math.PI)
  c.fill()
  c.fillStyle = 'rgba(255, 168, 0, 0.23)'
  c.beginPath()
  c.arc(this.x,this.y,80,0,2*Math.PI)
  c.fill()
  for(var i = 0; i < this.planets.length; i++){
    var dist = this.planets[i].dist;
    var angle = this.planets[i].angle;
    this.planets[i].angle+=this.planets[i].speed;

    var calculatedx = Math.cos(angle*(Math.PI/180))*dist
    var calculatedy = Math.sin(angle*(Math.PI/180))*dist
    this.planets[i].x = (this.x+calculatedx)-16
    this.planets[i].y = (this.y+calculatedy)-16
    if(this.planets[i].selected==true){
      c.fillStyle = 'rgb(132, 63, 244)'
      c.beginPath()
      c.arc(this.planets[i].x+16,this.planets[i].y+16,this.planets[i].r+4,0,2*Math.PI)
      c.fill()
    }
    if(this.planets[i].firstTrader==true){
      c.fillStyle = 'rgb(246, 60, 188)'
      c.beginPath()
      c.arc(this.planets[i].x+16,this.planets[i].y+16,this.planets[i].r+4,0,2*Math.PI)
      c.fill()
    }
    c.drawImage(this.planets[i].img,this.planets[i].x,this.planets[i].y)
    //Buttons
    planetBs[i].x = (this.x+calculatedx)
    planetBs[i].y = (this.y+calculatedy)
  }
  c.drawImage(sun,this.x-16,this.y-16)
}

SolarSystem.prototype.newPlanet = function(){
  planet = new Planet(this.planets.length)
  currentNewPlanet = this.planets[this.planets.length-1]
  planetCreation=true
}
