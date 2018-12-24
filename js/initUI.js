document.addEventListener('DOMContentLoaded', function() {

    var elems = document.querySelectorAll('.autocomplete');
    var options = {onAutocomplete: (val) => {
        console.log(val);
    }}
    var instances = M.Autocomplete.init(elems,options);
    instances[0].updateData({
        "Agumon (Classic)":"dragon,5",
        "Arkadimon":"devil,8",
        "Armadillomon":"beast,5",
        "Armadillomon (Shakkoumon)":"beast,10",
        "Bearmon":"beast,5",
        "Betamon":"aqua,5",
        "Biyomon":"bird,5",
        "BlackAgumon (Omnimon Zwart)":"dragon,10",
        "BlackAgumon (Blitzgreymon)":"dragon,10",
        "BlackAgumon (Millenniummon)":"dragon,10",
        "BlackAgumon (MoonMillenniummon)":"dragon,10",
        "BlackGabumon":"beast,10",
        "Candlemon":"fire,8",
        "CommanDramon":"dragon,5",
        "DemiDevimon (Bakemon)":"devil,3",
        "DemiDevimon (Devimon)":"devil,10",
        "DemiDevimon (Soulmon)":"devil,8",
        "DemiMeramon":"fire,1",
        "Dokunemon":"insect,5",
        "Dorumon (DexDorugamon)":"beast,10",
        "Dorumon (Dorugamon)":"beast,10",
        "Dorumon (ReptileDramon)":"beast,10",
        "Dracmon":"devil,5",
        "Dracomon (Coredramon (Blue))":"dragon,5",
        "Dracomon (Coredramon (Green))":"dragon,5",
        "Drimogemon":"beast,1",
        "Elecmon":"beast,5",
        "FanBeemon":"insect,8",
        "Gabumon":"beast,5",
        "Gazimon":"devil,10",
        "Gazimon (MoonMillenniummon)":"devil,10",
        "Goblimon":"devil,3",
        "Gomamon (Vikemon)":"aqua,5",
        "Gomamon (Jijimon)":"aqua,5",
        "Gotsumon":"rock,2",
        "Guilmon":"dragon,10",
        "Hagurumon (Guardromon)":"rock,3",
        "Hagurumon (MechaNorimon)":"rock,5",
        "Hawkmon": "bird,5",
        "Hawkmon (Silphymon)":"bird,10",
        "Impmon":"devil,10",
        "Keramon":"devil,8",
        "Kotemon (Gladimon)":"dragon,8",
        "Kotemon (Musyamon)":"dragon,5",
        "Kunemon":"insect,1",
        "Lopmon":"beast,5",
        "Monodramon":"dragon,5",
        "Mushroomon":"plant,5",
        "Otamamon":"aqua,10",
        "Palmon (Togemon)":"plant,3",
        "Palmon (Woodmon)":"plant,1",
        "Patamon":"beast,8",
        "Patamon (Shakkoumon)":"beast,10",
        "Psychemon":"devil,10",
        "Renamon":"beast,10",
        "Ryuudamon":"beast,8",
        "Salamon (BlackGatomon)":"beast,8",
        "Salamon (Gatomon)":"beast,8",
        "Salamon (Mikemon)":"beast,10",
        "Salamon (Silphymon)":"beast,10",
        "Sharmamon":"devil,3",
        "Swimmon":"aqua,10",
        "Syakomon":"aqua,10",
        "Tentomon":"insect,5",
        "Terriermon":"beast,5",
        "Tsukaimon":"devil,10",
        "Veemon (Ex-Vmon)":"dragon,10",
        "Veemon (Veedramon)":"dragon,10",
        "Wormmon":"insect,5",
        "Wormmon (Jogress)":"insect,10",
        "Kamemon":"aqua,5",
        "Kokuwamon":"rock,10",
        "Kudamon":"beast,8",
        "PawnChessmon (Black)":"rock,3",
        "PawnChessmon (White)":"rock,3",
        "ToyAgumon":"dragon,10",
        "Tanemon":"plant,1",
        "Azulongmon (Qinglongmon)":"dragon,13",
        "Baihumon":"beast,13",
        "Lucemon":"devil,10",
        "Xuanwumon":"aqua,13",
        "Zhuqiaomon":"bird,13",
        "Gizumon AT":"rock,3"
    });

    instances[0].open();
    instances[0].autocompleteInit = {
        onAutocomplete: (val) => {
            console.log(val);
        }
    };
      M.AutoInit();
});