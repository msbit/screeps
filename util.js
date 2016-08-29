var distance = function(pos1, pos2) {
  var delta_x = Math.abs(pos1.x - pos2.x);
  var delta_y = Math.abs(pos1.y - pos2.y);
  return Math.sqrt(delta_x + delta_y);
};

module.exports.distance_from = function(positionable) {
  return function(other_pos) {
    return distance(positionable.pos, other_pos);
  };
};
