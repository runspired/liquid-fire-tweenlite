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

}
// END-SNIPPET
