import { animate, TransitionPromise } from 'liquid-fire-tweenlite';
import Ember from 'ember';

const { Promise } = Ember.RSVP; // jshint ignore:line

export default function flyTo(opts={}) {

  if (!this.newElement) {
    return TransitionPromise.resolve();

  } else if (!this.oldElement) {
    this.newElement.css({visibility: ''});
    return TransitionPromise.resolve();
  }

  const oldOffset = this.oldElement.offset();
  const newOffset = this.newElement.offset();

  if (opts.movingSide === 'new') {
    let motion = {
      x: [0, oldOffset.left - newOffset.left],
      y: [0, oldOffset.top - newOffset.top],
      outerWidth: [this.newElement.outerWidth(), this.oldElement.outerWidth()],
      outerHeight: [this.newElement.outerHeight(), this.oldElement.outerHeight()]
    };
    this.oldElement.css({ visibility: 'hidden' });
    return new TransitionPromise({
      animateIn: function() {
        return animate(this.newElement, motion, opts);
      }.bind(this)
    });


  } else {
    let motion = {
      x: newOffset.left - oldOffset.left,
      y: newOffset.top - oldOffset.top,
      outerWidth: this.newElement.outerWidth(),
      outerHeight: this.newElement.outerHeight()
    };
    this.newElement.css({ visibility: 'hidden' });

    return new TransitionPromise({
      animateOut: function() {
        return animate(this.oldElement, motion, opts);
      }.bind(this),
      animateIn: function() {
        this.newElement.css({ visibility: ''});
        return Promise.resolve(true);
      }.bind(this)
    });

  }
}
