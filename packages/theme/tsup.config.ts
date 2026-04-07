import { createTsupConfig } from '../../tsup.config'

export default createTsupConfig({
  entry: {
    main: 'src/main.ts',
    components: 'src/components/index.ts',
    utils: 'src/utils/index.ts',
    colors: 'src/colors/index.ts',
    presets: 'src/presets/index.ts',
    'test-utils': 'src/test-utils/index.ts',
  },
  splitting: true,
})
