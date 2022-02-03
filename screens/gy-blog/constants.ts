export const blogs = [
  {
    title: 'College Requirements have evolved.  Are you prepared?',
    author: 'Whoever',
    id: 0,
    photoURL: '/images/college-lawn.jpeg',
    content: [
      {
        text: 'This is my blog about colleges and stuff.  I have many insights about learning things that you should listen to.',
        type: 'paragraph',
      },
      { text: 'The Studying Process', type: 'sub-heading-1' },
      {
        text: 'Another Paragraph about colleges and things and yeah I have nothing to say just gonna keep typing stuff to make this paragraph look long enough visually.',
        type: 'paragraph',
      },
    ],
  },
  {
    title: '10 Helpful Ways to Avoid Study Fatigue',
    author: 'Whoever',
    id: 1,

    photoURL: '/images/paying-attention.jpeg',
    content: [
      {
        text: 'This is my blog about colleges and stuff.  I have many insights about learning things that you should listen to.',
        type: 'paragraph',
      },
      { text: 'Train Your Brain', type: 'sub-heading-1' },
      {
        text: 'Another Paragraph about colleges and things and yeah I have nothing to say just gonna keep typing stuff to make this paragraph look long enough visually.',
        type: 'paragraph',
      },
    ],
  },
  {
    title: 'Balancing Covid Safety With Mental Health',
    author: 'Jane D. Parent',
    id: 2,
    photoURL: '/images/college-building.jpeg',
    content: [
      {
        text: 'This is my blog about colleges and stuff.  I have many insights about learning things that you should listen to.',
        type: 'paragraph',
      },
      { text: 'A Healthy Balance', type: 'sub-heading-1' },
      {
        text: 'Another Paragraph about colleges and things and yeah I have nothing to say just gonna keep typing stuff to make this paragraph look long enough visually.',
        type: 'paragraph',
      },
    ],
  },
]

export function getBlogPostById(blogId: string) {
  const numberId = +blogId
  return blogs.find(blogPost => blogPost.id === numberId)
}
