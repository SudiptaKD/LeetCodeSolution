/**
 * @param {string} command
 * @return {string}
 */
 var interpret = function(command) {
    let commandArr = command.split('()');
    commandArr = commandArr.join('o');
    commandArr = commandArr.split('(al)');
    commandArr = commandArr.join('al')
    return commandArr;
};