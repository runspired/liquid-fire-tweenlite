import { TransitionPromise, animate, stop } from 'liquid-fire-tweenlite';

export default function crossFade(opts={}) {
  stop(this.oldElement);

  return new TransitionPromise({
    animateOut: function() {
      return animate(this.oldElement, {opacity: 0}, opts);
    }.bind(this),
    animateIn: function() {
      return animate(this.newElement, {opacity: (opts.maxOpacity || 1)}, opts);
    }.bind(this),
    parallel: true
  });
}
