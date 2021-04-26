const { actOnNearest } = require('util');

module.exports.tick = (creep) => {
  if (creep.memory.building && creep.carry.energy === 0) {
    creep.memory.building = false;
    creep.say('harvesting');
  }
  if (!creep.memory.building && creep.carry.energy === creep.carryCapacity) {
    creep.memory.building = true;
    creep.say('building');
  }

  if (creep.memory.building) {
    actOnNearest(creep, FIND_CONSTRUCTION_SITES, Creep.prototype.build);
  } else {
    actOnNearest(creep, FIND_SOURCES, Creep.prototype.harvest);
  }
};
