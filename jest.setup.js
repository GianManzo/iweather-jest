import "expo-modules-core";
global.setImmediate =
  global.setImmediate || ((fn, ...args) => setTimeout(fn, 0, ...args));
global.clearImmediate =
  global.clearImmediate || ((handle) => clearTimeout(handle));
