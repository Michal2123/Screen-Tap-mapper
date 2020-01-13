
const Scene = require('Scene');
const Patches = require('Patches');
// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');


var screen_height = 0;
Scene.root.find('canvas0').bounds.height.monitor({ fireOnInitialValue: true }).subscribe(function (height) {
    Patches.setScalarValue('canvasHeight', height.newValue);
});
var screen_width = 0;
Scene.root.find('canvas0').bounds.width.monitor({ fireOnInitialValue: true }).subscribe(function (width) {
    Patches.setScalarValue('canvasWidth', width.newValue);
});
