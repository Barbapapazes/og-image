import { defineComponent } from 'vue'
import type { OgImageOptions } from '../../types'
import { defineOgImageStatic } from '#imports'

export default defineComponent<OgImageOptions>({
  name: 'OgImageStatic',
  setup(_, { attrs }) {
    if (process.server)
      defineOgImageStatic(attrs)

    return () => null
  },
})
