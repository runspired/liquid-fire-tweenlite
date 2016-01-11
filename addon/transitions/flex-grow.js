import { animate, stop, TransitionPromise } from 'liquid-fire-tweenlite';

export default function flexGrow(opts) {
  stop(this.oldElement);
  return new TransitionPromise({
    animateIn: function() {
      return animate(this.oldElement, {'flex-grow': 0 }, opts);
    }.bind(this),
    animateOut: function() {
      return  animate(this.newElement, {'flex-grow': 1 }, opts);
    }.bind(this)
  });
}
