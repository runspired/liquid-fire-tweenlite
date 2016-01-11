import { test } from 'qunit';
import moduleForAcceptance from '../../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | transitions/to down');

test('visiting /transitions/to-down', function(assert) {
  visit('/');

  andThen(function() {
    visit('/to-down');

    andThen(function() {
      assert.equal(currentURL(), '/to-down');
    });
  });
});
