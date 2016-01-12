import { stop, animate, TransitionPromise, isAnimating, finish } from 'liquid-fire-tweenlite';
import Ember from 'ember';

const {
  Promise // jshint ignore:line
  } = Ember.RSVP;

export default function moveOver(dimension, direction, opts = {}) {

  const finishPrevious = () => {
    let firstStep;

    if (isAnimating(this.oldElement, 'moving-in')) {
      firstStep = finish(this.oldElement, 'moving-in');
    } else {
      stop(this.oldElement);
      firstStep = Promise.resolve();
    }

    return firstStep.then(() => {
      const oldParams = {};
      const newParams = {};
      let property;
      let measure;

      if (dimension.toLowerCase() === 'x') {
        property = 'x'; //'translateX';
        measure = 'width';
      } else {
        property = 'y'; // 'translateY';
        measure = 'height';
      }

      const bigger = biggestSize(this, measure);

      oldParams[property] = (bigger * direction) + 'px';
      newParams[property] = [(-1 * bigger * direction) + 'px', '0px'];

      return {
        oldParams,
        newParams
      };
    });
  };

  const animateOut = (params) => {
    return animate(this.oldElement, params.oldParams, opts, 'move-over--out');
  };

  const animateIn = (params) => {
    return animate(this.newElement, params.newParams, opts, 'move-over--in');
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
