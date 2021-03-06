import sanity from './sanity'
import imageUrlBuilder from '@sanity/image-url'

const imageBuilder = imageUrlBuilder(sanity)

export const imageUrlFor = (source: any) => imageBuilder.image(source)
