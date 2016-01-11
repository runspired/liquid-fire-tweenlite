import { test } from 'qunit';
import moduleForAcceptance from '../../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | transitions/flex grow');

test('visiting /transitions/flex-grow', function(assert) {
  visit('/transitions/flex-grow');

  andThen(function() {
    assert.equal(currentURL(), '/transitions/flex-grow');
  });
});
