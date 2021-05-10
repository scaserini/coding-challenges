var format = function (str, obj) {
  return str.replace(/\{\w+\}/g, (expr) => {
    const prop = expr.slice(1, -1);
    if (obj[prop] === undefined) return expr;
    return obj[prop];
  });
};
