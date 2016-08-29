Memory.config = require('config');
var role = require('role');
var memory = require('memory');

var tick = function () {
  memory.tick();

  Object.keys(role.definitions).forEach(function(name) {
    var config = Memory.config[name];
    var current = _.filter(Game.creeps, function(creep) {
      return creep.memory.role === name;
    });
    if(current.length < config.count) {
      Game.spawns['Spawn1'].createCreep(config.loadout, undefined, {
        role: name
      });
    }
  });

  role.tick();
};

module.exports.loop = tick;
