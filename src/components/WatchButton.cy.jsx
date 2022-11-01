import WatchButton from "./WatchButton.vue";

describe('<WatchButton />', () => {
  it('takes an initial value', () => {
    cy.mount(() => <div class="m-4">
      <WatchButton initial/>
    </div>)
    .get('body')
    .findByText('Unwatch')
    .should('be.visible')
  })
  it('is not watching by default', () => {
    cy.mount(() => <div class="m-4">
      <WatchButton/>
    </div>)
    .get('body')
    .findByText('Watch')
    .should('be.visible')
  })
  it('toggles when clicked', () => {
    cy.mount(() => <div class="m-4">
      <WatchButton/>
    </div>)
    .get('body')
    .findByText('Watch')
    .click()
    .findByText('Unwatch')
    .should('be.visible')
  })
  it('emits a change event when toggled', () => {
    const toggleSpy = cy.spy().as('onToggleSpy')
    cy.mount(() => <div class="m-4">
      <WatchButton onToggle={toggleSpy}></WatchButton>
    </div>)
    .get('body')
    .findByText('Watch')
    .click()
    .get('@onToggleSpy')
    .should('have.been.called')
  })
})