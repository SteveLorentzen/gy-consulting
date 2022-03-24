export type TextWithPictureProps = {
  title: string
  altText: string
  objectPosition: ObjectPosition
  src: string
  theme: 'blue' | 'white'
  imageSide: 'left' | 'right'
  children?: React.ReactNode
}

export type ObjectPosition =
  | 'left'
  | 'center'
  | 'left top'
  | 'right'
  | 'right top'
  | 'center top'
  | 'center bottom'
  | 'left bottom'
  | 'right bottom'
