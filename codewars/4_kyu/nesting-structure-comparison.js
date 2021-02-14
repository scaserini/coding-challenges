Array.prototype.sameStructureAs = function (other) {
  // Return 'true' if and only if 'other' has the same
  // nesting structure as 'this'.
  return sameStructureAsRecursive(this, other);
};

const sameStructureAsRecursive = (el1, el2) => {
  if (Array.isArray(el1) && Array.isArray(el2)) {
    if (el1.length != el2.length) {
      return false;
    }
    let isValid = true;
    for (let i = 0; i < el1.length; i++) {
      isValid = isValid && sameStructureAsRecursive(el1[i], el2[i]);
    }
    return isValid;
  } else if (!Array.isArray(el1) && !Array.isArray(el2)) {
    return true;
  }
  return false;
};
