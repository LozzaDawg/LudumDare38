function Planet(id){
  this.x = 500
  this.y = 500
  this.r = 16
  this.dist = 50
  this.angle = 180
  this.speed = Math.random()*(0.1-0.07)+0.07
  this.img
  this.firstTrader =false
  this.district
  this.id = id
  this.SpM = Math.round(minerals/2)
  this.SpF = Math.round(food/2)
  this.SpU = Math.round(uranium/2)
  this.gravity = 0.5
  this.ozone = 0.5
  this.radiation = 0.5
  this.intellect
  this.happiness
  this.productivity
  this.minerals
  this.food
  this.uranium
  this.Fpy = 0
  this.Mpy = 0
  this.Upy = 0
  this.RMpy = 0
  this.Tpy = 0
  this.Fsts = 0
  this.Msts = 0
  this.Usts = 0
  this.RMsts = 0
  this.Tsts = 0
  this.totPro = 0
  this.storage = 2000
  this.refinedMinerals = 0
  this.technology = 0
  this.maxHap = 100
  this.maxInt = 100
  this.maxPop = 1000
  this.maxProd = 50
  this.HapCap
  this.intCap
  this.prodMult = 1.6
  this.selected = false
  currentSystem.planets.push(this)
  planetBs.push(new CButton(this.x,this.y,this.r))
}



Planet.prototype.editingStats = function(){
  this.happiness = 10*this.gravity
  this.productivity = 10*this.ozone
  this.intellect = 10*this.radiation
  this.food = this.SpF*(1-this.gravity)
  if(this.district==1) this.food = 0
  this.minerals = this.SpM*(1-this.ozone)
  this.uranium = this.SpU*(1-this.radiation)

  gravityB.text = 'Gravity: '+Math.round(this.gravity*10)+''
  ozoneB.text = 'Ozone: '+Math.round(this.ozone*10)+''
  radiationB.text = 'Radiation: '+Math.round(this.radiation*10)+''
  foodCreB.text = 'Food: '+Math.round(this.SpF)+''
  mineralCreB.text = 'Mineral: '+Math.round(this.SpM)+''
  uraniumCreB.text = 'Uranium: '+Math.round(this.SpU)+''
}

Planet.prototype.finalizeStats = function(){
  //Resources
  this.Fpy = this.food
  this.Mpy = this.minerals
  this.Upy = this.uranium
  this.RMpy = this.refinedMinerals
  this.Tpy = this.technology
  //Stats
  this.productivity = 10*this.ozone
  this.HapCap = 100*this.gravity
  this.happiness = Math.round(50*this.gravity)
  this.intCap = 100*this.radiation
  this.intellect = Math.round(50*this.radiation)
  this.population = Math.round(this.maxPop/15)
  this.totPro = 10

  this.Fsts = 0
  this.Msts = 0
  this.Usts = 0
  this.RMsts = 0
  this.Tsts = 0
}

Planet.prototype.work = function(){

  if(this.Fsts<this.storage) this.Fsts+=Math.round(this.Fpy*this.totPro)
  if(this.Fsts>this.storage) this.Fsts = this.storage
  if(this.Msts<this.storage) this.Msts+=Math.round(this.Mpy*this.totPro)
  if(this.Msts>this.storage) this.Msts = this.storage
  if(this.Usts<this.storage) this.Usts+=Math.round(this.Upy*this.totPro)
  if(this.Usts>this.storage) this.Usts = this.storage
  if(this.RMsts>this.storage) this.RMsts = this.storage
  if(this.Tsts>this.storage) this.Tsts = this.storage
  //Stats
  //Decrease Stats
  if(this.population>this.maxPop/2){
    //Inc Happiness
    if(this.happiness!= this.HapCap){
      if(this.Fsts/2>this.population || this.population>this.maxPop/2){
        this.happiness+=3
        this.Fsts-=100
      }
    }
    //Inc Intellect
    if(this.intellect!= this.intCap){
      if(this.Msts/2>this.population || this.population>this.maxPop/2){
        this.intellect+=3
        this.Msts-=100
      }
    }
  }

  //Population
  if(this.Fsts/2 > this.population+30 || this.Fsts>(this.storage-(this.storage/5))){
    this.population+=20
    this.Fsts-=20
  }
  if(this.Fsts/2 < this.population-30){
    this.population-=20
  }
  //Production
  this.totPro = (10+(this.productivity/10)+(this.happiness/100)+(this.Tsts/200)+(this.population/100))*this.prodMult
  //Maxing Stats
  if(this.happiness > this.HapCap) this.happiness=this.HapCap
  if(this.intellect > this.intCap) this.intellect=this.intCap
  if(this.population > this.maxPop) this.population=this.maxPop

  if(this.district==1 && this.Msts > this.storage/2){
    this.Msts-=50
    this.RMsts+= 25
  }
  if(this.intellect > 99 && this.RMsts > this.storage/3){
    this.RMsts-=50
    this.Tsts+=25
  }

}

function genResources(){
  for(var i = 0; i < currentSystem.planets.length; i++){
    currentSystem.planets[i].work()
  }
}



stars = []
function Star(){
  this.x = Math.random()*canvas.width
  this.y = Math.random()*canvas.height
  this.img = star
  stars.push(this)
}

for(var i = 0; i < 50; i++){
  var meme = new Star()
}

for(var i = 0; i < stars.length; i++){
  stars[i].render
}

Star.prototype.render = function(){
  c.drawImage(this.img,this.x,this.y)
}
