
var rootVue = new Vue({
  el : '#appRoot',
  data : {
    removeDevFeatures : true,
    showDataWarning : false,
    eggName : '',
    eggStyle : 'normal',
    animate : true,
    auto : false,
    hatchBackup : false,
    hatchBupLevel : 4,
    goal : false,
    goalLevel : 4,
    reachLevelTimes : 50,
    levelInIncubator : 0
  },
  methods : {
    changeIncubator : function(){
      eggDetails = getSelectedEggDetails()
      eggStyle = this.eggStyle
      if(typeof(eggDetails) === "undefined"){
       M.toast({html: 'Please enter a valid digimon name'})
       throw eggNameWrongException;
     }

     if(eggStyle == ''){
       M.toast({html: 'Please select a proper egg type'})
       throw eggStyleWrongException;
     }

    if(this.levelInIncubator==5){
      M.toast({html: 'Already at max level'})
    }
    else
     processIncubator(eggDetails,eggStyle,this.levelInIncubator,true)
    }
  },
  computed : {
    incubatorImg : function(){
      if(this.levelInIncubator>=5)
        this.levelInIncubator = 5;
      return "img/incubator-"+this.levelInIncubator+".png";
    }
  },
  watch : {
    eggStyle : function(){
      console.log(this.eggStyle)
      if(!(this.eggStyle === 'normal'))
        this.showDataWarning = true
      else
        this.showDataWarning = false
    }
  }

})


function processIncubator(eggDetails,styleOfEgg,levelInIncubator,showNotif) {
  let randChance = Math.random() * 100
//  console.log(chances,randChance,eggDetails,styleOfEgg,levelInIncubator)
  let lookforLevel = levelInIncubator+1
  let chances= {}
  switch (lookforLevel) {
      case 1:
        chances = eggDetails.chances.one;
        break;
        case 2:
          chances = eggDetails.chances.two;
          break;
        case 3:
          chances = eggDetails.chances.three;
          break;
        case 4:
              chances = eggDetails.chances.four;
              break;
              case 5:
                chances = eggDetails.chances.five;
                break;

  }


  if(styleOfEgg === "three" && levelInIncubator < 3){
    levelInIncubator++
    rootVue.levelInIncubator = levelInIncubator
    return
  }
  if(styleOfEgg === "four" && levelInIncubator < 4){
    levelInIncubator++
      rootVue.levelInIncubator = levelInIncubator
    return
  }

  if (randChance <= chances.eggSuccess) {
    if(showNotif)
     M.toast({html: 'Data adding for level '+(levelInIncubator+1)+' is successful'})
    levelInIncubator++
  } else if (randChance > chances.eggSuccess && randChance <= chances.eggBreak + chances.eggSuccess) {
    if(showNotif)
    M.toast({html: 'Data adding for level '+(levelInIncubator+1)+' broke the egg'})

    levelInIncubator = 0
  } else {
    M.toast({html: 'Data adding for level '+(levelInIncubator+1)+' failed'})
  }

  rootVue.levelInIncubator = levelInIncubator

}

function getSelectedEggDetails() {
  found = false;
  details = {
    data : "",
    type : "",
    chances : {}
  }

  var values = Object.values(digimons);
  for(digimon in values){
    let v = Object.values(values[digimon])
    for(val in v){
      if(v[val] === rootVue.eggName){
        found = true
        details.type = v[0]
        details.data = v[1]
        details.chances = v[4]
      }
      if(found)
        break;
    }
    if(found)
      break;
  }


  return found? details : undefined
}
