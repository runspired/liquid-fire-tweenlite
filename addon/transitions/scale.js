import { TransitionPromise, animate } from 'liquid-fire-tweenlite';

export default function scale(opts={}) {
  return new TransitionPromise({
    animateIn: function() {
      return animate(this.oldElement, {scale: 0.2}, opts);
    }.bind(this),
    animateOut: function() {
      return animate(this.newElement, {scale: 1}, opts);
    }.bind(this)
  });
}
