module.exports.tick = (Game, Memory) => {
  Object.keys(Memory.creeps).filter(x => !Game.creeps[x]).forEach((key) => {
    delete Memory.creeps[key];
    console.log('Cleaning zombie memory', key);
  });
};
