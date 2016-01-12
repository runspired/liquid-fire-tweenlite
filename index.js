/* jshint node: true */
'use strict';

module.exports = {
  name: 'liquid-fire-tweenlite',

  included: function(app) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    // ensures we have the parent app instance
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    app.options.babel = app.options.babel || {};
    app.options.babel.includePolyfill = true;
  }

};
