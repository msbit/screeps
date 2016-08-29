var names = ['builder', 'harvester', 'upgrader'];
var definitions = {};

var quotes = require('quotes');

names.forEach(function(name) {
  definitions[name] = require('role.' + name);
});

module.exports.tick = function() {
  Object.keys(Game.creeps).map(function(name) {
    return Game.creeps[name];
  }).forEach(function(creep) {
    definitions[creep.memory.role].tick(creep);
    if(Math.random() > 0.9) {
      creep.say(quotes[Math.floor(Math.random() * quotes.length)]);
    }
  });
};

module.exports.names = names;
module.exports.definitions = definitions;
