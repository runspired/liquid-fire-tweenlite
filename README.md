Liquid-fire-tweenlite
=====================

[![Build Status](https://travis-ci.org/runspired/liquid-fire-tweenlite.svg)](https://travis-ci.org/runspired/liquid-fire-tweenlite)
[![npm version](https://badge.fury.io/js/liquid-fire-tweenlite.svg)](http://badge.fury.io/js/liquid-fire-tweenlite)
[![Ember Observer Score](http://emberobserver.com/badges/liquid-fire-tweenlite.svg)](http://emberobserver.com/addons/liquid-fire-tweenlite)

## Support, Questions, Collaboration

Join the [liquid-fire](https://embercommunity.slack.com/messages/liquid-fire/) channel on Slack.

[![Slack Status](https://ember-community-slackin.herokuapp.com/badge.svg)](https://ember-community-slackin.herokuapp.com/)

### Status

[Changelog](./CHANGELOG.md)

[![dependencies](https://david-dm.org/runspired/liquid-fire-tweenlite.svg)](https://david-dm.org/runspired/liquid-fire-tweenlite)
[![devDependency Status](https://david-dm.org/runspired/liquid-fire-tweenlite/dev-status.svg)](https://david-dm.org/runspired/liquid-fire-tweenlite#info=devDependencies)


## Usage

`ember install liquid-fire-tweenlite`

This will run the default blueprint which additionally installs `liquid-fire`, `ember-tweenlite`, and `tweenlite` based
versions of `liquid-fire`s default transitions into your app.

Usage of each transition remains identical to before, except options are passed to `TweenLite` instances
instead of `velocity.js`.

## Contributing

Contributions are very welcome, when making a PR please try to use the following conventions:

** Commit Messages: ** [angular-style](https://github.com/angular/angular.js/blob/v1.4.8/CONTRIBUTING.md#commit)

`<type>(<scope>): <title>`

Examples:

- chore(deps): bump deps in package.json and bower.json
- docs(component): document the `fast-action` component

**Branch Naming:**

`<type>/<short-description>`

Examples:

- chore/bump-deps
- docs/foo-component-usage
