
var cv = document.getElementById('canvas')
var c = cv.getContext('2d')

c.mozImageSmoothingEnabled = false;
c.webkitImageSmoothingEnabled = false;
c.msImageSmoothingEnabled = false;
c.imageSmoothingEnabled = false;
c.font = '30px PixelFont'

//God Items
var food = 10
var minerals = 10
var uranium = 10
var processedMinerals = 0
var technology = 0

// //Buttons
var gravityB = new Button(cv.width/4+20,cv.height-cv.height/4-75,115,40,'Gravity: 5')
var ozoneB = new Button(cv.width/4+165,cv.height-cv.height/4-75,115,40,'Ozone: 5')
var radiationB = new Button(cv.width/4+305,cv.height-cv.height/4-75,115,40,'Radiation: 5')
var foodCreB = new Button(cv.width/4+20,70+cv.height-cv.height/4-75,115,40,'Food: '+food+'')
var mineralCreB = new Button(cv.width/4+165,70+cv.height-cv.height/4-75,115,40,'Minerals: '+minerals+'')
var uraniumCreB = new Button(cv.width/4+305,70+cv.height-cv.height/4-75,115,40,'Uranium: '+uranium+'')

var newWoldB = new Button(25,cv.height-70,150,50,'New World')
var newTradeB = new Button(25,cv.height-140,150,50,'New Trade')
var cancelTradeB = new Button(25,cv.height-140,150,50,'Cancel')
var confirmTradeB = new Button(25,cv.height-210,150,50,'Confirm')
var gameInfoB = new Button(25,75,150,50,'Info')
var takeRecsB = new Button(25,75,200,50,'Take Resources')
var createB = new Button(cv.width/2+cv.width/4-80,cv.height/4+cv.height/1.5-50,70,40,'Create')
var dist1B = new Button(cv.width/6,150,200,50,'Forge District')
var dist2B = new Button(cv.width/6,300,200,50,'Growth District')
var dist3B = new Button(cv.width/6,450,200,50,'Mining District')
var closePlanetInfoB = new Button(cv.width-150,cv.height-40,80,30,'Back')
var closeInfoB = new Button(cv.width-150,cv.height-70,100,50,'Back')
var closeDistB = new Button(25,75,150,50,'Back')

var pm1 = new PlusNMinus(cv.width/4+20,cv.height-cv.height/4-75,0,false)
var pm2 = new PlusNMinus(cv.width/4+165,cv.height-cv.height/4-75,1,false)
var pm3 = new PlusNMinus(cv.width/4+305,cv.height-cv.height/4-75,2,false)
var pm4 = new PlusNMinus(cv.width/4+20,cv.height-cv.height/4-5,3,true)
var pm5 = new PlusNMinus(cv.width/4+165,cv.height-cv.height/4-5,4,true)
var pm6 = new PlusNMinus(cv.width/4+305,cv.height-cv.height/4-5,5,true)

//GameStates
var planetCreation = false
var tradeRoute = false
var selectDistrict = false
var showPlanetInfo = false
var gameInfo = false



//ClassItems
var ui = new UserInterface()
var system1 = new SolarSystem(canvas.width/2,canvas.height/2+25,300)

//Other
var currentSystem = system1
var currentNewPlanet
var currentPlanetAttribute
var currentPlanetMaterial
var currentDistrict
var planetBs = []
var trades = []
var planetInfo
var newTrader1
var newTrader2
var textC = 'black'
var boxC = 'white'

function update(){
  if(food > 100) food = 100
  if(minerals > 100) minerals = 100
  if(uranium > 100) uranium = 100
  if(processedMinerals > 100) processedMinerals = 100
  if(technology > 100) technology = 100
  c.clearRect(0,0,cv.width,cv.height)
  c.fillStyle = 'rgb(5, 17, 32)'
  c.fillRect(0,0,cv.width,cv.height)
  updateTrades()
  ui.update()
}


this.setInterval(update,1/60)
this.setInterval(genResources,1000)
