const distance = function (pos1, pos2) {
  const delta_x = Math.abs(pos1.x - pos2.x);
  const delta_y = Math.abs(pos1.y - pos2.y);
  return Math.sqrt(delta_x + delta_y);
};

const get_nearest = function (positionable, targets) {
  let nearest_distance;
  let nearest;
  targets.forEach(function (target) {
    target_distance = distance(positionable.pos, target.pos);
    if (nearest_distance === undefined || nearest_distance > target_distance) {
      nearest_distance = target_distance;
      nearest = target;
    }
  });
  return nearest;
};

module.exports.act_on_nearest = function (movable, type, func) {
  const targets = movable.room.find(type);
  if (targets.length) {
    const nearest = get_nearest(movable, targets);
    if (func.call(movable, nearest) == ERR_NOT_IN_RANGE) {
      movable.moveTo(nearest);
    }
  }
};
