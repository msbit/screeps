const names = ['builder', 'harvester', 'upgrader'];
const definitions = {};

for (const name of names) {
  definitions[name] = require('role.' + name);
}

module.exports.tick = (Game) => {
  for (const creep of Game.creeps) {
    definitions[creep.memory.role].tick(creep);
  }
};

module.exports.names = names;
module.exports.definitions = definitions;
