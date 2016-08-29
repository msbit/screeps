var role_names = ['harvester'];
var role_defs = {};

role_names.forEach(function(role_name) {
  role_defs[role_name] = require('role.' + role_name);
});

module.exports.tick = function() {
  Object.keys(Game.creeps).map(function(name) {
    return Game.creeps[name];
  }).forEach(function(creep) {
    role_defs[creep.memory.role].tick(creep);
  });
};
