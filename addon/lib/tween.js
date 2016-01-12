import TweenLite from 'tweenlite';
import Ember from 'ember';
import { getElement } from './animate';

const {
  copy,
  isArray
} = Ember;

const {
  defer
} = Ember.RSVP;

const TWEEN_DEFAULTS = {
  duration: 350,
  delay: 0
};

let TWEEN_ID = 0;

export default function tween($element, properties = {}, options = {}, label = '') {
  const element = getElement($element);
  const opts = normalizeOptions(copy(properties, true), copy(options, true));
  const transition_id = '-lf-tweenlite:' + label + ':' + (TWEEN_ID++);
  const deferred = defer(transition_id);
  let Tween;

  opts.onComplete = function() {
    deferred.resolve();
  };

  if (opts.fromVars) {
    var fromOpts = opts.fromVars;
    delete opts.fromVars;
    Tween = TweenLite.fromTo(
      element,
      opts.duration,
      { css: fromOpts },
      opts);
  } else {
    Tween = TweenLite.to(
      element,
      opts.duration,
      opts);
  }

  Tween.transition_id = transition_id;
  Tween.transition_label = label;
  Tween._deferred = deferred;

  return deferred.promise;
}

function normalizeOptions(properties, options) {
  const opts = Object.assign({}, TWEEN_DEFAULTS, options);
  normalizeCSS(opts, properties);

  opts.duration = opts.duration / 1000;
  opts.delay = opts.delay / 1000;

  return opts;
}

function normalizeCSS(opts, css) {
  const fromVars = {};
  let hasFromVar = false;

  Object.keys(css).forEach((key) => {
    if (isArray(css[key])) {
      fromVars[key] = css[key][0];
      css[key] = css[key][1];
      hasFromVar = true;
    }
  });

  if (hasFromVar) {
    opts.fromVars = fromVars;
  }


  // By default, we clear the element's `display`
  // and `visibility` properties at the start of animation. Our
  // animated divs are all initially rendered with `display:none`
  // and `visibility:hidden` to prevent a flash of before-animated
  // content.
  if (typeof(css.display) === 'undefined') {
    css.display = '';
  }
  if (typeof(css.visibility) === 'undefined') {
    css.visibility = '';
  }

  if (hasFromVar) {
    fromVars.display = css.display;
    fromVars.visibility = css.visibility;
  }

  opts.css = css;
}
