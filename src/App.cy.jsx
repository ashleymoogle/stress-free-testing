import App from './App.vue'
import { products } from '../cypress/component/fixtures'

describe('<App />', () => {
  it('works', () => {
    expect(true).to.be.true
  })
  it('renders', () => {
    cy.viewport(800, 600)
    cy.intercept('/products', {
      delay: 1000,
      body: products,
    }).as('products')
    cy.mount(<App/>)
  })
})
