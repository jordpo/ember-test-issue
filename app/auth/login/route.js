import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

const {
  get,
  inject,
} = Ember;

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  session: inject.service(),

  actions: {
    login() {
      const email = get(this, 'controller.email');
      const password = get(this, 'controller.password');
      get(this, 'session').authenticate('authenticator:oauth2', email, password);
    },
  },
});
