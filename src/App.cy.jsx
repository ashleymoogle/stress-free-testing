import App from './App.vue'
import { routes } from './router'

describe('<App />', () => {
  it('renders all routes', () => {
    cy.mount(App)
      .get('body')
      .contains('a')
      .each(($el, idx) => {
        cy.wrap($el)
          .should('have.attr', routes[idx])
      })
      .get('body')
      .findByText('Demo').should('be.visible')
      .click()
      .get('body')
      .findByText('The Demo Page').should('be.visible')
  })
})
