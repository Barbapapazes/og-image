import { defineNitroPlugin } from 'nitropack/dist/runtime/plugin'
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { defu } from 'defu'
import type { UseHeadInput } from 'unhead'
import { getOgImagePath, useOgImageRuntimeConfig } from '../../utils'

export default defineNitroPlugin((nitroApp) => {
  const { isNuxtContentDocumentDriven, defaults } = useOgImageRuntimeConfig()
  nitroApp.hooks.hook('content:file:afterParse', async (content: ParsedContent) => {
    if (content._draft || content._extension !== 'md' || content._partial || content.indexable === false || content.index === false)
      return

    let path = content.path
    if (isNuxtContentDocumentDriven)
      path = content._path
    // convert ogImage to head tags
    if (path && content.ogImage) {
      const ogImageConfig = typeof content.ogImage === 'object' ? content.ogImage : {}
      const optionsWithDefault = defu(ogImageConfig, defaults)
      // Note: we can't resolve the site URL here because we don't have access to the request
      // the plugin nuxt-content-canonical-urls.ts fixes this
      const src = getOgImagePath(path, optionsWithDefault)

      const payload = {
        title: content.title,
        excerpt: content.description || content.excerpt,
        ...content.ogImage,
      }
      // options is an object which has keys that may be kebab case, we need to convert the keys to camel case
      Object.entries(ogImageConfig).forEach(([key, val]) => {
        // with a simple kebab case conversion
        payload[key.replace(/-([a-z])/g, g => g[1].toUpperCase())] = val
      })

      content.head = defu(<UseHeadInput<any>> {
        script: [
          {
            id: 'nuxt-og-image-overrides',
            type: 'application/json',
            processTemplateParams: true,
            innerHTML: payload,
            // we want this to be last in our head
            tagPosition: 'bodyClose',
            tagPriority: 30, // slighty higher priority
          },
        ],
        meta: [
          { property: 'og:image', content: src },
          { property: 'og:image:width', content: optionsWithDefault.width },
          { property: 'og:image:height', content: optionsWithDefault.height },
          { property: 'og:image:type', content: `image/${optionsWithDefault.extension}` },
          { property: 'og:image:alt', content: optionsWithDefault.alt },
          // twitter
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:image:src', content: src },
          { name: 'twitter:image:width', content: optionsWithDefault.width },
          { name: 'twitter:image:height', content: optionsWithDefault.height },
          { name: 'twitter:image:alt', content: optionsWithDefault.alt },
        ],
      })
    }
    return content
  })
})
