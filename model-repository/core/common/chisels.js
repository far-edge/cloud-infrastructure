// Finds the distinct elements in the given array.
const distinct = (array) => {
  if (!array || !array.length) {
    return [];
  }
  return [ ...(new Set(array)) ];
};

module.exports = {
  distinct
};
