var level = 0

while (level != 4) {
  var chance = Math.random() * 100
  var eggSuccess
  var eggBreak
  var eggFail

  switch (level) {
    case 0: //chances required to get 1/5
      eggSuccess = 60
      eggBreak = 20
      eggFail = 20
      break;
    case 1:
      eggSuccess = 40
      eggBreak = 30
      eggFail = 30
      break;
    case 2:
      eggSuccess = 30
      eggBreak = 50
      eggFail = 20
      break;
    case 3:
      eggSuccess = 10
      eggBreak = 80
      eggFail = 10
      break;
    case 4:
      eggSuccess = 5
      eggBreak = 90
      eggFail = 5
      break;
  }

  if (chance <= eggSuccess) {
    console.log("SUCCESS moving to " + (level + 1));
    level++
  } else if (chance > eggSuccess && chance <= eggBreak + eggSuccess) {
    console.log("BROKE moving to 0");
    level = 0
  } else if (chance > eggBreak + eggSuccess && chance <= eggFail + eggSuccess + eggBreak) {
    console.log("Data failed. Still on level " + level);
  }
}