import { test } from 'qunit';
import moduleForAcceptance from 'upgrade-test/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | auth/login');

test('visiting /auth/login', function(assert) {
  visit('/auth/login');

  fillIn('.email:first', 'homer@example.com');
  fillIn('.password:first', 'password');

  click('button[type=submit]');

  // NOTE: the test fails if this duplicate andThen is not here
  // andThen(() => {
  //   assert.ok(true);
  // });

  andThen(() => {
    assert.equal(currentRouteName(), 'dashboard');
  });
});
