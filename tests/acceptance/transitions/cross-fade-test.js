import { test } from 'qunit';
import moduleForAcceptance from '../../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | transitions/cross fade');

test('visiting /transitions/cross-fade', function(assert) {
  visit('/');

  andThen(function() {
    visit('/cross-fade');

    andThen(function() {
      assert.equal(currentURL(), '/cross-fade');
    });
  });
});
