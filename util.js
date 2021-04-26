const distance = (pos1, pos2) => {
  const deltaX = Math.abs(pos1.x - pos2.x);
  const deltaY = Math.abs(pos1.y - pos2.y);
  return Math.sqrt(deltaX + deltaY);
};

const getNearest = (positionable, targets) => {
  let nearestDistance = -Number.MAX_VALUE;
  let nearest;

  for (const target of targets) {
    const targetDistance = distance(positionable.pos, target.pos);
    if (nearestDistance <= targetDistance) { continue; }

    nearestDistance = targetDistance;
    nearest = target;
  }

  return nearest;
};

module.exports.actOnNearest = (movable, type, func) => {
  const targets = movable.room.find(type);
  if (targets.length === 0) { return; }

  const nearest = getNearest(movable, targets);
  if (func.call(movable, nearest) !== ERR_NOT_IN_RANGE) { return; }

  movable.moveTo(nearest);
};
