

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

canvas.addEventListener('mousemove', function(evt) {
  mousePos = getMousePos(canvas, evt);
}, false)

canvas.addEventListener('mouseup', function(evt) {
  if(canClick == true){
    if(evt.button === 0){

      if(gameInfo==true){
        if(pointWithinBoxFromSeperatePoints(closeInfoB,mousePos.x,mousePos.y)){
          gameInfo = false
        }
      }

      if(tradeRoute==true){
        if(pointWithinBoxFromSeperatePoints(cancelTradeB,mousePos.x,mousePos.y)){
          tradeRoute = false
          for(var j = 0; j < currentSystem.planets.length; j++){
            currentSystem.planets[j].firstTrader=false
          }
          for(var j = 0; j < currentSystem.planets.length; j++){
            currentSystem.planets[j].selected=false
          }
          showPlanetInfo=false
        }
        for(var i = 0; i < planetBs.length; i++){
          if(currentSystem.planets[i]!=newTrader1){
            if(pointWithinCircFromSeperatePoints(planetBs[i],mousePos.x,mousePos.y)){
              for(var j = 0; j < currentSystem.planets.length; j++){
                currentSystem.planets[j].selected=false
              }
              currentSystem.planets[i].selected=true
              if(showPlanetInfo==false) showPlanetInfo=true
              planetInfo = currentSystem.planets[i]
            }
          }
          if(showPlanetInfo==true){

            if(pointWithinBoxFromSeperatePoints(confirmTradeB,mousePos.x,mousePos.y)){
              newTrader2 = planetInfo
              newTrade(newTrader1,newTrader2)
              showPlanetInfo=false
              tradeRoute=false
              for(var j = 0; j < currentSystem.planets.length; j++){
                currentSystem.planets[j].selected=false
              }
              for(var j = 0; j < currentSystem.planets.length; j++){
                currentSystem.planets[j].firstTrader=false
              }
            }
          }
        }
      }

      if(planetCreation==false && tradeRoute==false && selectDistrict==false && gameInfo==false){
        if(showPlanetInfo==false){
          if(pointWithinBoxFromSeperatePoints(gameInfoB,mousePos.x,mousePos.y)){
             gameInfo = true
          }
        }else{
          if(pointWithinBoxFromSeperatePoints(takeRecsB,mousePos.x,mousePos.y)){
            var tf = Math.floor(planetInfo.Fsts/5)
            var tm = Math.floor(planetInfo.Msts/5)
            var tu = Math.floor(planetInfo.Usts/5)
            var trm = Math.floor(planetInfo.RMsts/5)
            var tt = Math.floor(planetInfo.Tsts/5)
            planetInfo.happiness/=2
            planetInfo.Fsts -= tf
            planetInfo.Msts -= tm
            planetInfo.Usts -= tu
            planetInfo.RMsts -= trm
            planetInfo.Tsts -= tt
            food+=tf
            minerals+=tm
            uranium+=tu
            processedMinerals+=trm
            technology+=tt
          }
        }




        for(var i = 0; i < planetBs.length; i++){
          if(pointWithinCircFromSeperatePoints(planetBs[i],mousePos.x,mousePos.y)){
            for(var j = 0; j < currentSystem.planets.length; j++){
              currentSystem.planets[j].selected=false
            }
            currentSystem.planets[i].selected=true
            if(showPlanetInfo==false) showPlanetInfo=true
            planetInfo = currentSystem.planets[i]
          }
        }

        if(pointWithinBoxFromSeperatePoints(newWoldB,mousePos.x,mousePos.y)){
          selectDistrict=true
          for(var j = 0; j < currentSystem.planets.length; j++){
            currentSystem.planets[j].selected=false
          }
          showPlanetInfo=false
        }
      }

      if(showPlanetInfo==true){
        if(pointWithinBoxFromSeperatePoints(closePlanetInfoB,mousePos.x,mousePos.y)){
          showPlanetInfo=false
          for(var j = 0; j < currentSystem.planets.length; j++){
            currentSystem.planets[j].selected=false
          }
        }
        if(pointWithinBoxFromSeperatePoints(newTradeB,mousePos.x,mousePos.y)){
          if(currentSystem.planets.length>1){
            newTrader1 = planetInfo
            newTrader1.firstTrader=true
            showPlanetInfo=false
            tradeRoute = true
          }
        }
      }



      if(selectDistrict==true){
        if(pointWithinBoxFromSeperatePoints(closeDistB,mousePos.x,mousePos.y)){
          selectDistrict=false
        }
        if(pointWithinBoxFromSeperatePoints(dist1B,mousePos.x,mousePos.y)){
          selectDistrict = false
          currentSystem.newPlanet()
          currentDistrict = 1
          for(var i = 0; i < pm.length;i++){
            pm[i].updateAsp()
            currentNewPlanet.district = 1
          }
        }
        if(pointWithinBoxFromSeperatePoints(dist2B,mousePos.x,mousePos.y)){
          selectDistrict = false
          currentSystem.newPlanet()
          currentDistrict = 2
          for(var i = 0; i < pm.length;i++){
            pm[i].updateAsp()
            currentNewPlanet.district = 2
          }
        }
        if(pointWithinBoxFromSeperatePoints(dist3B,mousePos.x,mousePos.y)){
          selectDistrict = false
          currentSystem.newPlanet()
          currentDistrict = 3
          for(var i = 0; i < pm.length;i++){
            pm[i].updateAsp()
            currentNewPlanet.district = 3
          }
        }
      }

      if(planetCreation==true){
        if(pointWithinBoxFromSeperatePoints(createB,mousePos.x,mousePos.y)){
          if(currentDistrict == 1){
            currentNewPlanet.img = forgeP
            currentNewPlanet.dist = Math.random()*(80-10)+10
          }
          if(currentDistrict == 2){
            currentNewPlanet.img = growthP
            currentNewPlanet.dist = Math.random()*(160-80)+80
          }
          if(currentDistrict == 3){
            currentNewPlanet.img = miningP
            currentNewPlanet.dist = Math.random()*(250-160)+160
          }
          food-=currentNewPlanet.SpF
          minerals-=currentNewPlanet.SpM
          uranium-=currentNewPlanet.SpU
          currentNewPlanet.finalizeStats()
          planetCreation = false
        }

        for(var i = 0; i < PnM.length; i++){
          if(pointWithinBoxFromSeperatePoints(PnM[i],mousePos.x,mousePos.y)){
            if(PnM[i].add==true){
              if(PnM[i].rec == true){
                if(PnM[i].aspect<=PnM[i].ga-1) PnM[i].aspect++
                PnM[i+1].aspect=PnM[i].aspect
              }else{
                if(PnM[i].aspect<=0.9) PnM[i].aspect+=0.1
                PnM[i+1].aspect=PnM[i].aspect
              }
            }else{
              if(PnM[i].rec == true){
                if(PnM[i].aspect>0) PnM[i].aspect--
                PnM[i-1].aspect=PnM[i].aspect
              }else{
                if(PnM[i].aspect>=0.1) PnM[i].aspect-=0.1
                PnM[i-1].aspect=PnM[i].aspect
              }
            }
            PnM[i].resetMemes()
            currentNewPlanet.editingStats()
          }
        }
      }

    }
  }
}, false)

function pointWithinBoxFromSeperatePoints(entity,entityx,entityy){
	return(entityx < entity.x + entity.width &&
	entityx > entity.x &&
	entityy < entity.y + entity.height &&
	entityy > entity.y)
}
function pointWithinCircFromSeperatePoints(entity,x,y){
	return (Math.sqrt(Math.pow(entity.x-x,2)+Math.pow(entity.y-y,2)) < entity.r);
}


function deSelectButtons(){
  gravityB.selected = false
  ozoneB.selected = false
  radiationB.selected = false
}
function deSelectButtons2(){
  foodCreB.selected = false
  mineralCreB.selected = false
  uraniumCreB.selected = false
}

var canClick = true
function stopClick(){
  canClick=false
  setInterval(startClick)
}
function startClick(){
  canClick=true
}
