import TweenLite from 'tweenlite';
import RSVP from 'rsvp';

const {
  Promise // jshint ignore:line
} = RSVP;

const TWEEN_DEFAULTS = {
  duration: 350,
  delay: 0
};

export default function tween(element, properties, options) {
  const opts = normalizeOptions(properties, options);

  opts.deferred = Promise.defer();
  opts.onComplete = opts.deferred.resolve;
  opts.onStart = function() {
    // By default, we clear the element's `display`
    // and `visibility` properties at the start of animation. Our
    // animated divs are all initially rendered with `display:none`
    // and `visibility:hidden` to prevent a flash of before-animated
    // content.
    if (typeof(options.display) === 'undefined') {
      element.style.display = '';
    }
    if (typeof(options.visibility) === 'undefined') {
      element.style.visibility = '';
    }
  };

  const Tween = TweenLite.to(
    element,
    opts.duration,
    opts);

  Tween._deferred = opts.deferred;

  return opts.deferred.promise;
};

function normalizeOptions(properties, options) {
  const opts = Object.assign({}, TWEEN_DEFAULTS, properties, options);
  opts.duration = opts.duration / 1000;
  opts.delay = opts.delay / 1000;

  return opts;
}
