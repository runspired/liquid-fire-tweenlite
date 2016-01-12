import { test } from 'qunit';
import moduleForAcceptance from '../../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | transitions/scroll-then');

test('visiting /move-over', function(assert) {
  visit('/');

  andThen(function() {
    visit('/move-over');

    andThen(function() {
      assert.equal(currentURL(), '/move-over');
    });
  });
});
