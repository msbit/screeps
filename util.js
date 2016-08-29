var distance = function(pos1, pos2) {
  var delta_x = Math.abs(pos1.x - pos2.x);
  var delta_y = Math.abs(pos1.y - pos2.y);
  return Math.sqrt(delta_x + delta_y);
};

var get_nearest = function(positionable, targets) {
  var nearest_distance;
  var nearest;
  targets.forEach(function(target) {
    target_distance = distance(positionable.pos, target.pos);
    if(nearest_distance === undefined || nearest_distance > target_distance) {
      nearest_distance = target_distance;
      nearest = target;
    }
  });
  return nearest;
};

module.exports.go_to_nearest = function(movable, type) {
  var targets = movable.room.find(type);
  if(targets.length) {
    var nearest = get_nearest(movable, targets);
    if(movable.build(nearest) == ERR_NOT_IN_RANGE) {
      movable.moveTo(nearest);
    }
  }
};
