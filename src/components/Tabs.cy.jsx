import Tabs from './Tabs.vue'
import {faker} from '@faker-js/faker'

const items = [
  {
    key: faker.datatype.uuid(),
    text: faker.commerce.department(),
  },
  {
    key: faker.datatype.uuid(),
    text: faker.commerce.department(),
  },
  {
    key: faker.datatype.uuid(),
    text: faker.commerce.department(),
  },
]

let onSelectSpy

beforeEach(() => {
  onSelectSpy = cy.spy().as('selectSpy')
})

describe('<Tabs />', () => {
  it('focuses the item that was clicked on', () => {
    cy.mount(() => (
      <div class="m-8">
        <Tabs onSelect={onSelectSpy} items={items} />
      </div>
    ))

    // Things to assert:
    // 1. The event was emitted
    // 2. The focus state is set (See `have.focus` assertion)
    // 3. Keybindings are working as expected

    cy.findByText(items[1].text).click().should('have.focus')
  })

  it('renders all the items passed in', () => {
    cy.mount(() => (<Tabs items={items} />))
      .wrap(items)
      .each((item) => {
        cy.get('body').findByText(item.text).should('be.visible')
      })
  })

  it('emits a select event when an item is clicked', () => {
    cy.mount(() => (<Tabs onSelect={onSelectSpy} items={items} />))
      .get('body').findByText(items[items.length - 1].text).click()
      .get('@selectSpy').should('have.been.calledWith', items[items.length - 1])
  })
})
