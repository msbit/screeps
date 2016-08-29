module.exports.tick = function() {
  _.filter(Memory.creeps, function(name) {
    return !Game.creeps[name];
  }).forEach(function(name) {
    delete Memory.creeps[name];
    console.log('Cleaning zombie memory', name);
  });
};
