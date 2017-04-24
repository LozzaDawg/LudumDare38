
function Trade(p1,p2,id){
  this.p1 = p1
  this.p2 = p2
  this.id = id
  this.count = 0
  this.tradeCost = 100
  trades.push(this)
}

Trade.prototype.update = function(){
  this.count++
  if(this.count==700){
    this.count=0
    var totalF = this.p1.Fsts + this.p2.Fsts
    var totalM = this.p1.Msts + this.p2.Msts
    var totalU = this.p1.Usts + this.p2.Usts
    var totalRM = this.p1.RMsts + this.p2.RMsts
    var totalT = this.p1.Tsts + this.p2.Tsts
    if(totalU>this.tradeCost){
      c.strokeStyle = 'rgb(159, 35, 7)'
      totalU-=this.tradeCost
      this.p1.Fsts = totalF/2
      this.p2.Fsts = totalF/2
      this.p1.Msts = totalM/2
      this.p2.Msts = totalM/2
      this.p1.Usts = totalU/2
      this.p2.Usts = totalU/2
      this.p1.RMsts = totalRM/2
      this.p2.RMsts = totalRM/2
      this.p1.Tsts = totalT/2
      this.p2.Tsts = totalT/2
    }
  }

  c.lineWidth=3
  c.strokeStyle = 'rgb(159, 35, 7)'
  if(this.count>630) c.strokeStyle = 'rgb(8, 226, 23)'
  c.beginPath()
  c.moveTo(this.p1.x+16,this.p1.y+16)
  c.lineTo(this.p2.x+16,this.p2.y+16)
  c.stroke()
}


Trade.prototype.breakTrade = function(){
  trades.splice(this.id)
}

var tradeid = 0
function newTrade(p1,p2){
  var trade = new Trade(p1,p2,tradeid)
  tradeid++
}

function updateTrades(){
  for(var i = 0; i < trades.length; i++){
    trades[i].update()
  }
}
