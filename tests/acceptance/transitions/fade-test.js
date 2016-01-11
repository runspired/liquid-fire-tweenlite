import { test } from 'qunit';
import moduleForAcceptance from '../../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | transitions/fade');

test('visiting /transitions/fade', function(assert) {
  visit('/transitions/fade');

  andThen(function() {
    assert.equal(currentURL(), '/transitions/fade');
  });
});
