module.exports.tick = function () {
  _.filter(Object.keys(Memory.creeps), function (key) {
    return !Game.creeps[key];
  }).forEach(function (key) {
    delete Memory.creeps[key];
    console.log('Cleaning zombie memory', key);
  });
};
