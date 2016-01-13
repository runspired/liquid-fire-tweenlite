/*jshint node:true*/
module.exports = {
  description: '',

  normalizeEntityName: function() {
    return '';
  },

  afterInstall: function() {
    return this.addAddonToProject('ember-tweenlite', '*');
  }

};
