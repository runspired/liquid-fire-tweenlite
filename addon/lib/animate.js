import RSVP from 'rsvp';
import TweenLite from 'tweenlite';
import tween from './tween.js';

const {
  Promise // jshint ignore:line
} = RSVP;

export function animate(element, properties, options) {
  if (!element || !properties) {
    return Promise.resolve();
  }

  return tween(...arguments);
}

export function isAnimating(element) {
  return element && TweenLite.getTweensOf(element).length > 0;
}

export function getTween(element) {
  if (!element) {
    return false;
  }
  const tweens = TweenLite.getTweensOf(element);
  return tweens.length > 0 ? tweens[0] : false;
}


export function stop(element) {
  const tween = getTween(element);
  if (tween) {
    tween.kill();
    tween._deferred.reject();
  }
}

export function finish(element) {
  const tween = getTween(element);
  return tween ? tween._deferred.promise : Promise.resolve();
}
