const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = Math.pow(2, disksNumber) - 1; // The minimum number of turns required is 2^n - 1.
  const seconds = Math.floor(turns / (turnsSpeed / 3600)); // Calculate the time in seconds by dividing the number of turns by the turns per second, and rounding down.
  return { turns, seconds };
}

module.exports = {
  calculateHanoi
};
