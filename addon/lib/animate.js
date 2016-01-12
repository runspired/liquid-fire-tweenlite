import Ember from 'ember';
import TweenLite from 'tweenlite';
import tween from './tween';
import jQuery from 'jquery';

const {
  Promise // jshint ignore:line
} = Ember.RSVP;

export function getElement($element) {
  return ($element && ($element instanceof jQuery || $element.constructor.prototype.jquery)) ?
    $element.get(0) : $element;
}

export function animate(element, properties /*, options, label*/) {
  if (!element || !properties) {
    return Promise.resolve();
  }

  return tween(...arguments);
}

export function isAnimating($element, label) {
  return getTween($element, label);
}

export function getTween($element, label) {
  if (!$element) {
    return false;
  }
  const element = getElement($element);
  const tweens = TweenLite.getTweensOf(element);
  for (let i = 0; i < tweens.length; i++) {
    if (tweens[i].label === label) {
      return tweens[i];
    }
  }
  return false;
}


export function stop($element, label) {
  const tween = getTween($element, label);
  if (tween) {
    tween.kill();
    tween._deferred.reject();
  }
}

export function finish($element, label) {
  const tween = getTween($element, label);
  return tween ? tween._deferred.promise : Promise.resolve();
}

export function timeSpent($element, label) {
  const tween = getTween($element, label);
  return tween ? tween.progress() * tween._duration * 1000 : 0;
}
