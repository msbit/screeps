const { actOnNearest } = require('util');

module.exports.tick = (creep) => {
  if (creep.carry.energy < creep.carryCapacity) {
    actOnNearest(creep, FIND_SOURCES, Creep.prototype.harvest);
    return;
  }

  if (creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
    creep.moveTo(Game.spawns.Spawn1);
  }
};
