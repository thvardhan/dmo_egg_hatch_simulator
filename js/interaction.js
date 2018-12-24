var rootVue = new Vue({
  el : '#appRoot',
  data : {
    eggName : ''
  },
  methods : {
    hello : function(){
      alert(this.eggName);
    }
  },

})
