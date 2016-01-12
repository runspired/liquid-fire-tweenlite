import { stop, TransitionPromise } from 'liquid-fire-tweenlite';

export default function defaultTransition() {

  // Stop any currently running animation on oldView
  stop(this.oldElement);

  // This is what we run when no animation is asked for. It just sets
  // the newly-added element to visible (because we always start them
  // out invisible so that transitions can control their initial
  // appearance).
  if (this.newElement) {
    this.newElement.css({visibility: ''});
  }

  return new TransitionPromise({});
}
