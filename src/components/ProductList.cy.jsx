import ProductList from './ProductList.vue'
import { products as allProducts } from '../../cypress/component/fixtures'

const productSelector = '[data-testid=product]'
const someProducts = allProducts.slice(0, 15)
describe('<ProductList />', { viewportHeight: 1280, viewportWidth: 1280 }, () => {
  it.only('renders some cards', () => {
    cy.mount(() => (
      <div class="p-12 resize overflow-auto max-w-1280 min-w-960px h-900px">
        <ProductList products={allProducts} />
      </div>
    ))
      .get(productSelector)
      .should('have.length', allProducts.length)
      .last().click().should('be.visible')
  })

  it('should render cards in the right order', () => {
    const lastProduct = someProducts[someProducts.length - 1]
    cy.mount(() => (
      <div class="p-12 resize overflow-auto max-w-1280 min-w-960px h-900px">
        <ProductList products={someProducts} />
      </div>
    )).get(productSelector)
      .last().should('contain.text', lastProduct.description)
  })
})
