Memory.config = require('config');
var role = require('role');
var memory = require('memory');
var room_name = Object.keys(Game.rooms)[0];

var MAX_X = 50;
var MAX_Y = 50;

var structures = [
  'spawn',
  'extension',
  'road',
  'constructedWall',
  'rampart',
  'keeperLair',
  'portal',
  'controller',
  'link',
  'storage',
  'tower',
  'observer',
  'powerBank',
  'powerSpawn',
  'extractor',
  'lab',
  'terminal',
  'container',
  'nuker'
];

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

  /*if(Game.spawns['Spawn1'].energy === Game.spawns['Spawn1'].energyCapacity) {
    //make somewhere to store the addition
    var x = Math.floor(Math.random() * MAX_X);
    var y = Math.floor(Math.random() * MAX_Y);
    var structure = structures[Math.floor(Math.random() * structures.length)];
    Game.rooms[room_name].createConstructionSite(x, y, structure);
  }*/
};

module.exports.loop = tick;
