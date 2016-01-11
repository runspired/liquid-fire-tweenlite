import { test } from 'qunit';
import moduleForAcceptance from '../../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | transitions/move over');

test('visiting /transitions/move-over', function(assert) {
  visit('/');

  andThen(function() {
    visit('/move-over');

    andThen(function() {
      assert.equal(currentURL(), '/move-over');
    });
  });
});
