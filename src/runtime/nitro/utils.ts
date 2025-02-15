import { withoutLeadingSlash, withoutTrailingSlash } from 'ufo'
import { hash } from 'ohash'
import type { H3Event } from 'h3'
import { normalizeKey } from 'unstorage'
import { getQuery } from 'h3'

export function resolvePathCacheKey(e: H3Event, path?: string) {
  const siteConfig = e.context.siteConfig.get()
  const basePath = withoutTrailingSlash(withoutLeadingSlash(normalizeKey(path || e.path)))
  return [
    (!basePath || basePath === '/') ? 'index' : basePath,
    hash([
      basePath,
      siteConfig.url,
      hash(getQuery(e)),
    ]),
  ].join(':')
}
