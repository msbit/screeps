Memory.config = require('config');

const memory = require('memory');
const role = require('role');

const roomName = Object.keys(Game.rooms)[0];

const MAX_X = 50;
const MAX_Y = 50;

const structures = [
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

module.exports.loop = () => {
  memory.tick(Game, Memory);

  for (const name in role.definitions) {
    const config = Memory.config[name];
    const current = Game.creeps.filter(x => x.memory.role === name);
    if (current.length >= config.count) { continue; }

    Game.spawns.Spawn1.createCreep(config.loadout, undefined, { role: name });
  }

  role.tick(Game);

  /* if (Game.spawns['Spawn1'].energy === Game.spawns['Spawn1'].energyCapacity) {
    //make somewhere to store the addition
    const x = Math.floor(Math.random() * MAX_X);
    const y = Math.floor(Math.random() * MAX_Y);
    const structure = structures[Math.floor(Math.random() * structures.length)];
    Game.rooms[roomName].createConstructionSite(x, y, structure);
  } */
};
