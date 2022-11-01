import Accordion from './Accordion.vue'
import { faker } from '@faker-js/faker'

const headerSelector = '[data-testid=header]'
const contentSelector = '[data-testid=content]'

const headerContent = faker.lorem.lines(1)
const content = faker.lorem.paragraphs(3)

describe('<Accordion />', () => {
  it('renders', () => {
    const slots = {
      default: () => <p data-testid="content">{content}</p>,
      target: () => <h1 data-testid="header">{headerContent}</h1>,
    }

    cy.mount(() => (
      <div class="p-12">
        <h1 class="text-lg">Accordion Examples</h1>
        <h1 class="pb-8">Click on the header to toggle the card</h1>
        {/* Arrange */}
        <Accordion vSlots={slots}></Accordion>
      </div>
    ))
    .get(headerSelector).should('be.visible').and('contain.text', headerContent)
    .get(contentSelector).should('not.exist')

    // Acting
    .get(headerSelector).click()
    .get(contentSelector).should('be.visible')

    // Use the header selectors and content selectors to interact
    // with the accordion and test that it correctly expands and collapses.
  })

  describe('props', () => {
    it('does not render content when initiallyOpen is false', () => {})
    it('renders content when initiallyOpen is true', () => {})
    it('is collapsed by default', () => {})
  })
})
