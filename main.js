var role = require('role');
var memory = require('memory');

var HARVESTER_COUNT = 2;
var UPGRADER_COUNT = 1;

var tick = function () {
  memory.tick();

  var harvesters = _.filter(Game.creeps, function(creep) {
    return creep.memory.role === 'harvester';
  });

  if(harvesters.length < HARVESTER_COUNT) {
    Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {
      role: 'harvester'
    });
  }

  var upgraders = _.filter(Game.creeps, function(creep) {
    return creep.memory.role === 'upgrader';
  });

  if(upgraders.length < UPGRADER_COUNT) {
    Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {
      role: 'upgrader'
    });
  }

  role.tick();
};

module.exports.loop = tick;
