const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let addition = options.addition === undefined ? '' : options.addition;
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';

  str = String(str);
  addition = String(addition);

  let result = '';
  let additionStr = '';

  for (let i = 0; i < additionRepeatTimes; i++) {
    additionStr += addition + (i === additionRepeatTimes - 1 ? '' : additionSeparator);
  }

  for (let i = 0; i < repeatTimes; i++) {
    result += str + additionStr + (i === repeatTimes - 1 ? '' : separator);
  }

  return result;
}


module.exports = {
  repeater
};
