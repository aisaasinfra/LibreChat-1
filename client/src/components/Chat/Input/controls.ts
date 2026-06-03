import { isAssistantsEndpoint } from 'librechat-data-provider';

interface ToolControlsVisibilityParams {
  endpoint?: string | null;
  hideBadgeRow?: boolean;
}

export function shouldShowToolControls({
  endpoint,
  hideBadgeRow,
}: ToolControlsVisibilityParams): boolean {
  if (!endpoint || hideBadgeRow === true) {
    return false;
  }

  return !isAssistantsEndpoint(endpoint);
}
