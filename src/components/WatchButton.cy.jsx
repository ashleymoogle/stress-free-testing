import WatchButton from './WatchButton.vue'
import { ref } from 'vue'
describe('WatchButton', () => {
  beforeEach(() => {
    cy.mount(() => {
      return (<div class="p-4">
        <WatchButton />
      </div>)
    })
  })

  // what to test...
})

describe('WatchButton API', () => {
  // What to test...
})
