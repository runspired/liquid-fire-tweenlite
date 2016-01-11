import Ember from 'ember';

const {
  RSVP
} = Ember;

const {
  defer,
  Promise // jshint ignore:line
} = RSVP;

let TRANSITION_ID = 0;

function returnResolved() {
  return Promise.resolve();
}

export default class TransitionPromise {

  constructor(options) {
    this.id = '-transition-' + (TRANSITION_ID++);
    this.parallel = options.parallel || false;
    options.finishPrevious = options.finishPrevious || returnResolved;
    options.animateOut = options.animateOut || returnResolved;
    options.animateIn = options.animateIn || returnResolved;

    this._animateOut = defer(this.id + '-out');
    this._animateIn = defer(this.id + '-in');
    this._firstStep = defer(this.id + '-start');

    this._promise = options.finishPrevious()
      .then(() => {
        return this._firstStep.resolve();
      })
      .then(() => {
        if (this.parallel) {
          return RSVP.hash({
            animateOut: options.animateOut(),
            animateIn: options.animateIn()
          });
        }
        return options.animateOut()
          .then(options.animateIn);
      });
  }

  firstStep() {
    return this._firstStep.promise;
  }

  animateIn() {
    return this._animateIn.promise;
  }

  animateOut() {
    return this._animateOut.promise;
  }

  then() {
    return this._promise.then(...arguments);
  }

  finally() {
    return this._promise.finally(...arguments);
  }

  catch() {
    return this._promise.catch(...arguments);
  }

}
