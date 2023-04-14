const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // Check if input is an array
  if (!Array.isArray(members)) {
    return false;
  }

  // Filter out non-string values, trim whitespace and get first character
  const filteredMembers = members
    .filter((member) => typeof member === 'string')
    .map((member) => member.trim()[0].toUpperCase());

  // Sort the characters alphabetically and join them into a string
  const dreamTeamName = filteredMembers.sort().join('');

  return dreamTeamName;
}

module.exports = {
  createDreamTeam
};
