export interface IBlog {
  _createdAt: Date
  _id: string
  _rev: string
  type: string
  _updatedAt: Date
  author: {
    _ref: string
    _type: string
  }
  body: {
    _key: string
    _type: string
    children: any[]
    markDefs: any[]
    style: string
  }[]
  mainImage: {
    _type: string
    asset: {
      _ref: string
      _type: string
    }
    crop: {
      _type: string
      bottom: number
      left: number
      right: number
      top: number
    }
    hotspot: {
      height: number
      width: number
      x: number
      y: number
      _type: string
    }
  }
  publishedAt: string
  slug: {
    _type: string
    current: string
  }
  title: string
  excerpt: string
}
