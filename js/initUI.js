document.addEventListener('DOMContentLoaded', function() {

    var elems = document.querySelectorAll('.autocomplete');

    var options = {onAutocomplete: (val) => {
        rootVue.eggName = val
    }}

    var names = Object.keys(digimons);
    var values = Object.values(digimons);
    var dataObjectAutoComplete = {};


      for (var x = 0; x < names.length; x++) {
      dataObjectAutoComplete[values[x].name.toString()] = values[x].icon;
      }


    var instances = M.Autocomplete.init(elems,options);
    instances[0].updateData(dataObjectAutoComplete);

    instances[0].open();
    instances[0].autocompleteInit = {
        onAutocomplete: (val) => {
            console.log(val);
        }
    };
      M.AutoInit();
});
