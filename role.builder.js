var util = require('util');

module.exports.tick = function(creep) {
  if(creep.memory.building && creep.carry.energy == 0) {
    creep.memory.building = false;
    creep.say('harvesting');
  }   
  if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
    creep.memory.building = true;
    creep.say('building');
  }   

  if(creep.memory.building) {
    util.go_to_nearest(creep, FIND_CONSTRUCTION_SITES);
  }   
  else {
    var sources = creep.room.find(FIND_SOURCES);
    if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
      creep.moveTo(sources[0]);
    }   
  }   
};
