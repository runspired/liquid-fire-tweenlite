import { TransitionPromise, isAnimating, timeSpent, finish, animate, stop } from 'liquid-fire-tweenlite';
import Ember from 'ember';

const {
  copy
} = Ember;

export default function fade(opts={}) {
  let animateOut;
  let animateIn;
  let finishPrevious;
  const fadingElement = findFadingElement(this);
  let outOpts = copy(opts, true);
  opts = copy(opts, true);

  if (outOpts.duration) {
    outOpts.duration = outOpts.duration / 2;
    opts.duration = opts.duration / 2;
  }

  if (fadingElement) {
    // We still have some older version that is in the process of
    // fading out, so out first step is waiting for it to finish.
    finishPrevious = () => {
      return finish(fadingElement, 'fade-out');
    };
  } else {
    if (isAnimating(this.oldElement, 'fade-in')) {
      // if the previous view is partially faded in, scale its
      // fade-out duration appropriately.
      outOpts = { duration: timeSpent(this.oldElement, 'fade-in') };
    }
    stop(this.oldElement);
    animateOut = () => {
      return animate(this.oldElement, {opacity: 0}, outOpts, 'fade-out');
    };
  }

  animateIn = () => {
    return animate(this.newElement, { opacity: (opts.maxOpacity || 1) }, opts, 'fade-in');
  };

  return new TransitionPromise({
    finishPrevious,
    animateOut,
    animateIn,
    parallel: false
  });

}

function findFadingElement(context) {
  for (var i = 0; i < context.older.length; i++) {
    var entry = context.older[i];
    if (isAnimating(entry.element, 'fade-out')) {
      return entry.element;
    }
  }
  if (isAnimating(context.oldElement, 'fade-out')) {
    return context.oldElement;
  }
}
