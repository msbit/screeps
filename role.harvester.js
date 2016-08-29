var util = require('util');

module.exports.tick = function(creep) {
  if(creep.carry.energy < creep.carryCapacity) {
    util.act_on_nearest(creep, FIND_SOURCES, Creep.prototype.harvest);
  }
  else {
    if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
      creep.moveTo(Game.spawns['Spawn1']);
    }
  }
}
