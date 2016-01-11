import TweenLite from 'tweenlite';
import Ember from 'ember';

const {
  defer
} = Ember.RSVP;

const TWEEN_DEFAULTS = {
  duration: 350,
  delay: 0
};

let TWEEN_ID = 0;

export default function tween($element, properties, options, label) {
  const element = $element.get(0);
  const opts = normalizeOptions(properties, options);
  const transition_id = '-lf-tweenlite:' + label + ':' + (TWEEN_ID++);
  const deferred = defer(transition_id);

  opts.onComplete = function() { deferred.resolve(); };
  opts.onStart = function() {
    element.style.display = opts.css.display;
    element.style.visibility = opts.css.visibility;
  };

  const Tween = TweenLite.to(
    element,
    opts.duration,
    opts);

  Tween.transition_id = transition_id;
  Tween.transition_label = label;
  Tween._deferred = deferred;

  return deferred.promise;
}

function normalizeOptions(properties, options) {
  const opts = Object.assign({}, TWEEN_DEFAULTS, options);

  opts.css = properties;
  opts.duration = opts.duration / 1000;
  opts.delay = opts.delay / 1000;

  // By default, we clear the element's `display`
  // and `visibility` properties at the start of animation. Our
  // animated divs are all initially rendered with `display:none`
  // and `visibility:hidden` to prevent a flash of before-animated
  // content.
  if (typeof(opts.css.display) === 'undefined') {
    opts.css.display = '';
  }
  if (typeof(opts.css.visibility) === 'undefined') {
    opts.css.visibility = '';
  }

  return opts;
}
