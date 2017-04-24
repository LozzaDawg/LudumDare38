
function UserInterface(){
}

UserInterface.prototype.update = function(){

  if(gameInfo==true){
    c.fillStyle = boxC
    c.fillRect(cv.width/6,cv.height/6,cv.width-2*(cv.width/6),cv.height-2*(cv.height/6))
    c.fillStyle = textC
    wrapText('Stats: ',-13+cv.width/6+40,cv.height/6+40-10,cv.width-2*(cv.width/6),20)
    wrapText('Items: ',-13+cv.width/6+40,(cv.height/6)*3-25,cv.width-2*(cv.width/6),20)
    c.font = '25px PixelFont'
    //How to Play
    wrapText('Happiness: Increases with food and a high population. Boosts Productivity.',-13+cv.width/6+40,cv.height/6+40+25-11,cv.width-2*(cv.width/6),25)
    wrapText('Intellect: Increases with Minerals and with a high Population.',-13+cv.width/6+40,cv.height/6+40+75-11,cv.width-2*(cv.width/6),25)
    wrapText('Population: Increases with Food. Boosts Productivity.',-13+cv.width/6+40,cv.height/6+40+100-11,cv.width-2*(cv.width/6),25)
    wrapText('Productivity: Increases the speed of Resource collection and creation.',-13+cv.width/6+40,cv.height/6+40+125-11,cv.width-2*(cv.width/6),25)
    //Items and Stats
    wrapText('Food: Keeps the population grwoing, generates happiness when in abundance, causes death when in shortage.',-13+cv.width/6+40,(cv.height/6)*3+25-25,cv.width-2*(cv.width/6),25)
    wrapText('Minerals: Increases the intelligence of the population, can be refined on planets in the Forge District.',-13+cv.width/6+40,(cv.height/6)*3+75-25,cv.width-2*(cv.width/6)-20,25)
    wrapText('Uranium: Used to feul Space Trade flights.',-13+cv.width/6+40,(cv.height/6)*3+125-25,cv.width-2*(cv.width/6),25)
    wrapText('Refined Minerals: Used to craft Technology when on a planet with 10 intellect.',-13+cv.width/6+40,(cv.height/6)*3+150-25,cv.width-2*(cv.width/6),25)
    wrapText('Technology: Increases production speed of all processes.',-13+cv.width/6+40,(cv.height/6)*3+200-25,cv.width-2*(cv.width/6),25)
    closeInfoB.render()
  }

  if(planetCreation == false && selectDistrict==false && gameInfo==false){
    system1.render()
    newWoldB.render()
    if(showPlanetInfo==false && tradeRoute==false)  gameInfoB.render()
  }
  c.font = '30px PixelFont'
  c.fillStyle = 'rgba(127, 10, 136, 0.50)'
  c.fillRect(0,0,cv.width,50)
  c.fillStyle = 'white'
  c.fillText('Food: '+food+'',20,35)
  c.fillText('Minerals: '+minerals+'',220,35)
  c.fillText('Uranium: '+uranium+'',420,35)
  c.fillText('Processed Minerals: '+processedMinerals+'',620,35)



  if(showPlanetInfo==true){
    if(tradeRoute==true){
      confirmTradeB.render()
    }else{
      takeRecsB.render()
      c.fillStyle = 'rgba(31, 190, 95, 0.57)'
      c.fillRect(cv.width-200,50,200,cv.height-50)
      c.font = '24px PixelFont'
      var sx = cv.width-190
      var sy = 100
      c.fillStyle = 'rgb(15, 13, 15)'
      c.fillText('Resources Per Cycle:',sx,sy-25)
      c.fillText('Resource Stores:',sx,sy+130)
      c.fillText('Lifeform Stats:',sx,sy+180+130)
      c.fillStyle = 'white'
      c.fillText('Food - '+Math.round(planetInfo.Fpy*planetInfo.totPro)+'',sx,sy)
      c.fillText('Minerals - '+Math.round(planetInfo.Mpy*planetInfo.totPro)+'',sx,sy+25)
      c.fillText('Uranium - '+Math.round(planetInfo.Upy*planetInfo.totPro)+'',sx,sy+50)
      c.fillText('Ref. Minerals - '+Math.round(planetInfo.RMpy*planetInfo.totPro)+'',sx,sy+75)
      c.fillText('Technology - '+Math.round(planetInfo.Tpy*planetInfo.totPro)+'',sx,sy+100)
      //Graphs
      c.fillRect(sx,sy+150,150,10)
      c.fillRect(sx,sy+180,150,10)
      c.fillRect(sx,sy+210,150,10)
      c.fillRect(sx,sy+240,150,10)
      c.fillRect(sx,sy+270,150,10)
      //Graphs Filled
      c.fillStyle = 'rgb(105, 69, 184)'
      c.fillRect(sx,sy+150,150*(planetInfo.Fsts/planetInfo.storage),10)
      c.fillRect(sx,sy+180,150*(planetInfo.Msts/planetInfo.storage),10)
      c.fillRect(sx,sy+210,150*(planetInfo.Usts/planetInfo.storage),10)
      c.fillRect(sx,sy+240,150*(planetInfo.RMsts/planetInfo.storage),10)
      c.fillRect(sx,sy+270,150*(planetInfo.Tsts/planetInfo.storage),10)
      c.font = '16px PixelFont'
      c.fillStyle = textC
      c.fillText('Food',sx,sy+145)
      c.fillText('Minerals',sx,sy+175)
      c.fillText('Uranium',sx,sy+205)
      c.fillText('Ref. Materials',sx,sy+235)
      c.fillText('Technology',sx,sy+265)


      //Life Form Stats
      c.fillStyle = 'white'
      //Graphs
      c.fillRect(sx,sy+180+150,150,10)
      c.fillRect(sx,sy+180+180,150,10)
      c.fillRect(sx,sy+180+210,150,10)
      c.fillRect(sx,sy+180+240,150,10)
      //Graphs Filled
      c.fillStyle = 'rgb(184, 17, 137)'
      c.fillRect(sx,sy+180+150,150*(planetInfo.happiness/planetInfo.maxHap),10)
      c.fillRect(sx,sy+180+180,150*(planetInfo.intellect/planetInfo.maxInt),10)
      c.fillRect(sx,sy+180+210,150*(planetInfo.population/planetInfo.maxPop),10)
      c.fillRect(sx,sy+180+240,150*(planetInfo.totPro/planetInfo.maxProd),10)
      c.font = '16px PixelFont'
      c.fillStyle = textC
      c.fillText('Happiness',sx,sy+180+145)
      c.fillText('Intellect',sx,sy+180+175)
      c.fillText('Population',sx,sy+180+205)
      c.fillText('Productivity',sx,sy+180+235)
      closePlanetInfoB.render()
      if(currentSystem.planets.length>1){
        newTradeB.render()
      }
    }
  }

  if(planetCreation==true){
    currentNewPlanet.editingStats()

    c.fillStyle = 'rgb(157, 252, 181)'
    var sx = cv.width/4
    var sy = cv.height/4
    var sw = cv.width/2
    var sh = cv.height/1.5
    c.fillRect(sx,sy,sw,sh)
    //c.fillStyle = 'rgb(18, 159, 19)'
    c.fillStyle = textC
    c.font = '25px PixelFont'
    //Resources
    var gx = sx+30
    var gy = sy+sh/5
    var gw = 20
    var gh = 100
    c.fillText('Planet Resources',sx+30,sy+40)
    c.fillText('Lifeform Atributes',sx+250,sy+40)
    c.font = '22px PixelFont'
    c.fillRect(gx,gy,gw,gh)
    c.fillRect(gx+80,gy,gw,gh)
    c.fillRect(gx+160,gy,gw,gh)
    c.fillStyle = 'rgb(20, 54, 143)'
    var maxBarF = food
    if(food>=100) maxBarF = 100
    var maxBarM = minerals
    if(food>=100) maxBarM = 100
    var maxBarU = uranium
    if(food>=100) maxBarU = 100
    c.fillRect(gx,gy,gw,gh*(currentNewPlanet.food/maxBarF))
    c.fillRect(gx+80,gy,gw,gh*(currentNewPlanet.minerals/maxBarM))
    c.fillRect(gx+160,gy,gw,gh*(currentNewPlanet.uranium/maxBarU))
    c.fillStyle = textC
    c.fillText('Food',gx-5,gy+gh+20)
    c.fillText('Minerals',gx+60,gy+gh+20)
    c.fillText('Uranium',gx+135,gy+gh+20)

    //Attributes
    var gx1 = sx+250
    var gy1 = sy+sh/5
    var gw1 = 20
    var gh1 = 100

    c.fillRect(gx1+10,gy1,gw1,gh1)
    c.fillRect(gx1+100,gy1,gw1,gh1)
    c.fillRect(gx1+200,gy1,gw1,gh1)
    c.fillStyle = 'rgb(150, 0, 255)'
    c.fillRect(gx1+10,gy1,gw1,gh1*(currentNewPlanet.happiness/10))
    c.fillRect(gx1+100,gy1,gw1,gh1*(currentNewPlanet.productivity/10))
    c.fillRect(gx1+200,gy1,gw1,gh1*(currentNewPlanet.intellect/10))
    c.fillStyle = 'black'
    c.fillText('Happiness',gx1-15,gy1+gh1+20)
    c.fillText('Productivity',gx1+70,gy1+gh1+20)
    c.fillText('Intellect',gx1+180,gy1+gh1+20)



    gravityB.renderS()
    ozoneB.renderS()
    radiationB.renderS()
    foodCreB.renderS()
    mineralCreB.renderS()
    uraniumCreB.renderS()
    createB.renderS()
    for(var i = 0; i < PnM.length;i++){
      PnM[i].render()
    }

  } else if(selectDistrict==true){
    closeDistB.render()
    dist1B.render()
    dist2B.render()
    dist3B.render()
    c.fillStyle = boxC
    c.fillRect(cv.width/2,120-40,400,150)
    c.fillRect(cv.width/2,280-40,400,150)
    c.fillRect(cv.width/2,440-40,400,150)
    c.fillStyle = textC
    wrapText('The Forge District is extremely hot. Food will not grow, but due to the heat, Minerals can be refined for furthur use. Very dangerous.',cv.width/2+20,120-10,380,20)
    wrapText('The Growth District is very habitable, and produces a lot of Food. A good place to start.',cv.width/2+20,280-10,380,20)
    wrapText('The Mining District is quite cold, and has no avaliable Uranium, However, it holds many Minerals. Tough living. ',cv.width/2+20,440-10,380,20)


  } else if(tradeRoute==true){
    cancelTradeB.render()
    c.fillStyle=boxC
    c.fillRect(25,75,210,120)
    c.font = '22px PixelFont'
    c.fillStyle=textC
    wrapText('Click another Planet to engage in a Trade Agreement and share all resources.', 35, 95,200,25)
  }
}
