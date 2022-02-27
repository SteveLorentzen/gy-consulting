export type TextWithPictureProps = {
  title: string
  objectPosition: ObjectPosition
  description: string
  src: string
  theme: 'blue' | 'white'
  imageSide: 'left' | 'right'
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
