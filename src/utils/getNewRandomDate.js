//creates the random date in the future at which the button will die, need to adjust for dev vs. prod.

const config = require("../config");

function getNewRandomDate() {
  let newDate = new Date(+new Date() + Math.floor(Math.random() * config.speed)+ 2000) //1000000

    return parseInt((newDate.getTime() / 1000).toFixed(0))
}

module.exports = getNewRandomDate;