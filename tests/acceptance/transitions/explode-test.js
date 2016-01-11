import { test } from 'qunit';
import moduleForAcceptance from '../../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | transitions/explode');

test('visiting /transitions/explode', function(assert) {
  visit('/transitions/explode');

  andThen(function() {
    assert.equal(currentURL(), '/transitions/explode');
  });
});
