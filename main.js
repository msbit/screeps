var config = require('config');
var role = require('role');
var memory = require('memory');

var tick = function () {
  memory.tick();

  var harvesters = _.filter(Game.creeps, function(creep) {
    return creep.memory.role === 'harvester';
  });

  if(harvesters.length < config.harvester_count) {
    Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {
      role: 'harvester'
    });
  }

  var upgraders = _.filter(Game.creeps, function(creep) {
    return creep.memory.role === 'upgrader';
  });

  if(upgraders.length < config.upgrader_count) {
    Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {
      role: 'upgrader'
    });
  }

  role.tick();
};

module.exports.loop = tick;
