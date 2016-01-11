import { test } from 'qunit';
import moduleForAcceptance from '../../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | transitions/scroll then');

test('visiting /transitions/scroll-then', function(assert) {
  visit('/');

  andThen(function() {
    visit('/scroll-then');

    andThen(function() {
      assert.equal(currentURL(), '/scroll-then');
    });
  });
});
