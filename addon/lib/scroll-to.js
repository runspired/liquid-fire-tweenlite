import { animate, stop } from './animate';
import Ember from 'ember';

const { Promise } = Ember.RSVP; // jshint ignore:line

export function scrollToY(element, offset, options={}) {
  options.duration = options.duration || 350;
  stop(element, 'scroll-y');
  return animate(element, { scrollTop: offset }, options, 'scroll-y');
}

export function scrollToX(element, offset, options={}) {
  options.duration = options.duration || 350;
  stop(element, 'scroll-x');
  return animate(element, { scrollLeft: offset }, options, 'scroll-x');
}

export function scrollTo(element, offsetY, offsetX, options={}) {
  return Promise.all([
    scrollToY(element, offsetY, options),
    scrollToX(element, offsetX, options)
  ]);
}
