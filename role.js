const names = ['builder', 'harvester', 'upgrader'];
const definitions = {};

names.forEach(function (name) {
  definitions[name] = require('role.' + name);
});

module.exports.tick = function () {
  Object.keys(Game.creeps).map(function (name) {
    return Game.creeps[name];
  }).forEach(function (creep) {
    definitions[creep.memory.role].tick(creep);
  });
};

module.exports.names = names;
module.exports.definitions = definitions;
