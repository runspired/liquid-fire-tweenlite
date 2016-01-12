/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  defaults.snippetSearchPaths = ['tests/dummy/app'];
  defaults.snippetPaths = ['tests/dummy/snippets'];

  var app = new EmberAddon(defaults,
    {
      babel: {
        includePolyfill: true,
        comments: false,
        compact: true
      }
    });

  var bootstrapPath = app.bowerDirectory + '/bootstrap/dist/';
  app.import(bootstrapPath + 'css/bootstrap.css');
  app.import(bootstrapPath + 'fonts/glyphicons-halflings-regular.eot', { destDir: '/fonts' });
  app.import(bootstrapPath + 'fonts/glyphicons-halflings-regular.svg', { destDir: '/fonts' });
  app.import(bootstrapPath + 'fonts/glyphicons-halflings-regular.ttf', { destDir: '/fonts' });
  app.import(bootstrapPath + 'fonts/glyphicons-halflings-regular.woff', { destDir: '/fonts' });
  app.import(bootstrapPath + 'fonts/glyphicons-halflings-regular.woff2', { destDir: '/fonts' });

  return app.toTree();
};
