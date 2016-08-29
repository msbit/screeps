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
    var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
    if(targets.length) {
      var closest_distance;
      var closest;
      targets.forEach(function(target) {
        target_distance = util.distance_from(creep)(target.pos);
        if(closest_distance === undefined || closest_distance > target_distance) {
          closest_distance = target_distance;
          closest = target;
        }
      });
      if(creep.build(closest) == ERR_NOT_IN_RANGE) {
        creep.moveTo(closest);
      }   
    }   
  }   
  else {
    var sources = creep.room.find(FIND_SOURCES);
    if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
      creep.moveTo(sources[0]);
    }   
  }   
};
