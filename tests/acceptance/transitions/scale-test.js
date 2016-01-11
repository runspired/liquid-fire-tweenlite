import { test } from 'qunit';
import moduleForAcceptance from '../../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | transitions/scale');

test('visiting /transitions/scale', function(assert) {
  visit('/transitions/scale');

  andThen(function() {
    assert.equal(currentURL(), '/transitions/scale');
  });
});
