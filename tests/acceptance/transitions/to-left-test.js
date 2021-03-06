import { test } from 'qunit';
import moduleForAcceptance from '../../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | transitions/to left');

test('visiting /transitions/to-left', function(assert) {
  visit('/');

  andThen(function() {
    visit('/to-left');

    andThen(function() {
      assert.equal(currentURL(), '/to-left');
    });
  });
});
