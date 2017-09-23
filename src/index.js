var partialApplication = function(fn) {
  var args = Array.prototype.slice.call(arguments);
  return function(args2) {
      const otherArgs = Array.prototype.slice.call(args2);
      const concat = args[1].concat(otherArgs);
      return fn.apply(this, concat);
  }
};

exports.partialApply = partialApplication;