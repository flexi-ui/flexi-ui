import { createContext } from '@flexi-ui/react-utils'

import { ContextType } from './use-button-group'

export const [ButtonGroupProvider, useButtonGroupContext] = createContext<ContextType>({
  name: 'ButtonGroupContext',
  strict: false,
})
