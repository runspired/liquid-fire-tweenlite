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

function wrapPromise(promise, deferred /* label */) {
  return promise.then(
      (success) => {
        deferred.resolve(success);
        return success;
      },
      (error) => {
        deferred.reject(error);
        throw error;
      }
    );
}

export default class TransitionPromise {

  constructor(options) {
    this.id = '-tweenlite-transition-' + (TRANSITION_ID++);
    this.parallel = options.parallel || false;
    options.finishPrevious = options.finishPrevious || returnResolved;
    options.animateOut = options.animateOut || returnResolved;
    options.animateIn = options.animateIn || returnResolved;

    this._animateOut = defer(this.id + '-out');
    this._animateIn = defer(this.id + '-in');
    this._firstStep = defer(this.id + '-start');

    this._promise = defer(this.id + '-main');

    wrapPromise(options.finishPrevious(), this._firstStep, 'first step')
      .then((result) => {
        if (this.parallel) {
          return Promise.all([
            wrapPromise(options.animateOut(result), this._animateOut, 'animate out'),
            wrapPromise(options.animateIn(result), this._animateIn, 'animate in')
          ]);
        }
        return wrapPromise(options.animateOut(result), this._animateOut, 'animate out')
          .then(() => {
            return wrapPromise(options.animateIn(result), this._animateIn, 'animate in');
          });
      })
      .then(
        this._promise.resolve,
        this._promise.reject
      );
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
    return this._promise.promise.then.call(this._promise.promise, ...arguments);
  }

  finally() {
    return this._promise.promise.finally.call(this._promise.promise, ...arguments);
  }

  catch() {
    return this._promise.promise.catch.call(this._promise.promise, ...arguments);
  }

  static resolve() {
    return new TransitionPromise({});
  }

}
