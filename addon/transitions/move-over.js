import { stop, animate, TransitionPromise, isAnimating, finish } from 'liquid-fire-tweenlite';
import Ember from 'ember';

const {
  Promise // jshint ignore:line
  } = Ember.RSVP;

export default function moveOver(dimension, direction, opts) {
  let finishPrevious;

  if (isAnimating(this.oldElement, 'moving-in')) {
    finishPrevious = finish(this.oldElement, 'moving-in');
  } else {
    stop(this.oldElement);
    finishPrevious = Promise.resolve();
  }

  finishPrevious = finishPrevious.then(() => {
    const oldParams = {};
    const newParams = {};
    let property;
    let measure;

    if (dimension.toLowerCase() === 'x') {
      property = 'translateX';
      measure = 'width';
    } else {
      property = 'translateY';
      measure = 'height';
    }

    const bigger = biggestSize(this, measure);

    oldParams[property] = (bigger * direction) + 'px';
    newParams[property] = ["0px", (-1 * bigger * direction) + 'px'];

    return {
      oldParams,
      newParams
    };
  });

  const animateIn = (params) => {
    return animate(this.oldElement, params.oldParams, opts);
  };

  const animateOut = (params) => {
    return animate(this.newElement, params.newParams, opts, 'moving-in');
  };

  return new TransitionPromise({
    finishPrevious,
    animateIn,
    animateOut,
    parallel: true
  });
}

function biggestSize(context, dimension) {
  var sizes = [];
  if (context.newElement) {
    sizes.push(parseInt(context.newElement.css(dimension), 10));
    sizes.push(parseInt(context.newElement.parent().css(dimension), 10));
  }
  if (context.oldElement) {
    sizes.push(parseInt(context.oldElement.css(dimension), 10));
    sizes.push(parseInt(context.oldElement.parent().css(dimension), 10));
  }
  return Math.max.apply(null, sizes);
}
