import Ember from 'ember';
import isBrowser from 'liquid-fire/is-browser';
import { scrollToY } from 'liquid-fire-tweenlite/lib/scroll-to';

export default function(nextTransitionName, options, ...rest) {
  if (isBrowser()) {
    Ember.assert(
      "You must provide a transition name as the first argument to scrollThen. Example: this.use('scrollThen', 'toLeft')",
      'string' === typeof nextTransitionName
    );

    const nextTransition = this.lookup(nextTransitionName);
    if (!options) {  options = {}; }

    Ember.assert(
      "The second argument to scrollThen is passed to Velocity's scroll function and must be an object",
      'object' === typeof options
    );

    // set scroll options via: this.use('scrollThen', 'ToLeft', {easing: 'spring'})
    options = Ember.merge( { duration: 350 }, options);
    const offset = options.offset || 0;
    delete options.offset;

    // additional args can be passed through after the scroll options object
    // like so: this.use('scrollThen', 'moveOver', {duration: 100}, 'x', -1);

    return scrollToY(document.body, offset, options)
      .then(() => { return nextTransition.apply(this, rest); });

  }
}
