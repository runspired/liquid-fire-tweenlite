import { TransitionPromise, animate } from 'liquid-fire-tweenlite';

export default function scale(opts={}) {
  return new TransitionPromise({
    animateOut: function() {
      return animate(this.oldElement, { scale: [1, 0.2] }, opts, 'scale--out');
    }.bind(this),
    animateIn: function() {
      return animate(this.newElement, { scale: [0.2, 1] }, opts, 'scale--in');
    }.bind(this)
  });
}
