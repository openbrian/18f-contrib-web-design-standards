var path = require('path');
var assets = 'lib/assets/_scss';

// The advanced approach.  See the simple approach below.
var neat = require('node-neat');
var neatEntryPoint = require.resolve('18f-contrib-web-design-standards');
var uswdsDir = path.join(path.dirname(neatEntryPoint), assets);

function includePaths() {
  return neat.with(uswdsDir);
}

module.exports = {

  includePaths: includePaths(),

  with: function() {
    var paths  = Array.prototype.slice.call(arguments);
    var result = [].concat.apply(includePaths(), paths);
    return result;
  }

};



// the simple approach
unused_module = {};
unused_module.exports = {

  includePaths: [
    path.join(__dirname, assets)
  ]

};


//console.log( module.exports.includePaths );
