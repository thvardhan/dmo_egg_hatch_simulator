var rootVue = new Vue({
  el : '#appRoot',
  data : {
    eggName : '',
    eggStyle : '',
    animate : true,
    auto : false,
    hatchBackup : false,
    hatchBupLevel : 4,
    goal : false,
    goalLevel : 4,
    reachLevelTimes : 50
  },
  methods : {
    hello : function(){
      alert(this.hatchBupLevel);
    }
  },

})
