// BEGIN-SNIPPET transition-demo-setup
export default function() {

  // this.transition = this.transition.bind(this, this.debug());

  this.transition(
    this.onInitialRender(),
    this.use('fade', { duration: 500, delay: 100 })
  );

  this.transition(
    this.toRoute('transitions.fade'),
    this.use('fade', { duration: 1000 }),
    this.reverse('fade', { duration: 1000 })
  );

  this.transition(
    this.toRoute('transitions.cross-fade'),
    this.use('cross-fade', { duration: 2000 }),
    this.reverse('cross-fade', { duration: 2000 })
  );

  this.transition(
    this.toRoute('transitions.flex-grow'),
    this.use('flex-grow', { duration: 1000 }),
    this.reverse('flex-grow', { duration: 1000 })
  );

  this.transition(
    this.toRoute('transitions.to-down'),
    this.use('to-down', { duration: 1000 }),
    this.reverse('to-up', { duration: 1000 })
  );

  this.transition(
    this.toRoute('transitions.to-right'),
    this.use('to-right', { duration: 1000 }),
    this.reverse('to-left', { duration: 1000 })
  );

  this.transition(
    this.toRoute('transitions.to-up'),
    this.use('to-up', { duration: 1000 }),
    this.reverse('to-down', { duration: 1000 })
  );

  this.transition(
    this.toRoute('transitions.to-left'),
    this.use('to-left', { duration: 1000 }),
    this.reverse('to-right', { duration: 1000 })
  );

  this.transition(
    this.toRoute('transitions.scale'),
    this.use('scale'),
    this.reverse('scale')
  );

}
// END-SNIPPET
