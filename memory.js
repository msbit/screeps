module.exports.tick = function() {
  _.filter(Memory.creeps, function(value, key) {
    return !Game.creeps[key];
  }).forEach(function(value, key) {
    delete Memory.creeps[key];
    console.log('Cleaning zombie memory', key);
  });
};
