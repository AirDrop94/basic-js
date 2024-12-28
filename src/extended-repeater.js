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
  let res = String(str);

  if (options.addition !== undefined) {
    let addition = String(options.addition);
    let additionRepeatTimes = options.additionRepeatTimes || 1;
    let additionSeparator = options.additionSeparator || '|';
    let additionArr = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
    res += additionArr;
  }

  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  return new Array(repeatTimes).fill(res).join(separator);
}

module.exports = {
  repeater
};
