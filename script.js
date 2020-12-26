var timep1=[prompt('How many hours per player?'),prompt('How many minutes per player?'),prompt('How many seconds per player?'),999]
var timep2=timep1
var timing = 'p1'
var p1 = [document.getElementById('p1name'),document.getElementById('p1'),document.getElementById('p1ms')]
var p2 = [document.getElementById('p2name'),document.getElementById('p2'),document.getElementById('p2ms')]
var decreaseS = function(){
  if(timing == 'p1'){
    timep1[2]-=1
    p1[1].innerHTML = timep1[0].toString()+':'+timep1[1]+':'+timep1[2]
  }else{
    timep2[2]-=1
    p2[1].innerHTML = timep2[0].toString()+':'+timep2[1]+':'+timep2[2]
  }
}
var decreaseM = function(){
  if(timing == 'p1'){
    timep1[1]-=1
    p1[1].innerHTML = timep1[0].toString()+':'+timep1[1]+':'+timep1[2]
  }else{
    timep2[1]-=1
    p2[1].innerHTML = timep2[0].toString()+':'+timep2[1]+':'+timep2[2]
  }
}
var decreaseH = function(){
  if(timing == 'p1'){
    timep1[0]-=1
    p1[1].innerHTML = timep1[0].toString()+':'+timep1[1]+':'+timep1[2]
  }else{
    timep2[0]-=1
    p2[1].innerHTML = timep2[0].toString()+':'+timep2[1]+':'+timep2[2]
  }
}
var decreaseMS =function(){
if(timing=='p1'&&!p1[-1]==0){
  timep1[-1]-=1
}else if(timing=='p1'&&p1[-1]==0{
  timep1[-1]=999
}
}