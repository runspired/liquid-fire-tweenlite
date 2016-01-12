import { test } from 'qunit';
import moduleForAcceptance from '../../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | transitions/flex grow');

test('visiting /transitions/flex-grow', function(assert) {
  visit('/');

  andThen(function() {
    visit('/flex-grow');

    andThen(function() {
      assert.equal(currentURL(), '/flex-grow');
    });
  });
});
