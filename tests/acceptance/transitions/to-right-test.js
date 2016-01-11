import { test } from 'qunit';
import moduleForAcceptance from '../../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | transitions/to right');

test('visiting /transitions/to-right', function(assert) {
  visit('/transitions/to-right');

  andThen(function() {
    assert.equal(currentURL(), '/transitions/to-right');
  });
});
