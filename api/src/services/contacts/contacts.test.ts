import { contacts } from './contacts'
import type { StandardScenario } from './contacts.scenarios'

describe('contacts', () => {
  scenario('returns all contacts', async (scenario: StandardScenario) => {
    const result = await contacts()

    expect(result.length).toEqual(Object.keys(scenario.contact).length)
  })
})
