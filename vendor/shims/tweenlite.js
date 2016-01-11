  (function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['tweenlite'] };
  }

  define('tweenlite', [], vendorModule);
})();
