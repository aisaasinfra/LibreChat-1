import { EModelEndpoint } from 'librechat-data-provider';

import { shouldShowToolControls } from '../controls';

describe('shouldShowToolControls', () => {
  it.each([
    ['custom endpoint', 'NewAPI', true],
    ['OpenAI endpoint', EModelEndpoint.openAI, true],
    ['agents endpoint', EModelEndpoint.agents, true],
    ['assistants endpoint', EModelEndpoint.assistants, false],
    ['azure assistants endpoint', EModelEndpoint.azureAssistants, false],
    ['missing endpoint', undefined, false],
  ])('returns %s visibility', (_label, endpoint, expected) => {
    expect(shouldShowToolControls({ endpoint })).toBe(expected);
  });

  it('honors model spec badge row suppression', () => {
    expect(
      shouldShowToolControls({
        endpoint: EModelEndpoint.agents,
        hideBadgeRow: true,
      }),
    ).toBe(false);
  });
});
