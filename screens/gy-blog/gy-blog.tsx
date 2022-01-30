import * as React from 'react'
import Image from 'next/image'

import { Input } from 'components/input'

const blogs = [
  {
    title: 'College Requirements have evolved.  Are you prepared?',
    photoURL: '/images/college-lawn.jpeg',
    endPreviewIndex: 0,
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
    photoURL: '/images/paying-attention.jpeg',
    endPreviewIndex: 0,
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
    photoURL: '/images/college-building.jpeg',
    endPreviewIndex: 0,
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

interface IBlog {
  title: string
  photoURL: string
  endPreviewIndex: number
  content: { text: string; type: string }[]
}

function BlogPost({ blog }: { blog: IBlog }) {
  return (
    <div className="flex flex-col items-center w-full mx-auto py-6 border-b-1 pb-8 hover:cursor-pointer hover:bg-gray-50">
      <div className="w-full flex flex-col xxs:flex-row items-center xxs:items-start">
        <div className="flex flex-col  xxs:items-start xxs:mr-4 w-full xxs:pr-8 order-2 xxs:order-1">
          <h2 className="text-2xl text-cyan-900 font-bold mb-4 my-4 xxs:my-0 xxs:mb-2">
            {blog.title}
          </h2>
          {blog.content.slice(0, blog.endPreviewIndex + 1).map(textObject => {
            switch (textObject.type) {
              case 'paragraph':
                return (
                  <p key={textObject.text} className="text-xl ">
                    {textObject.text}
                  </p>
                )
              case 'sub-heading-1':
                return (
                  <h3
                    key={textObject.text}
                    className="text-2xl text-cyan-600 font-bold my-4"
                  >
                    {textObject.text}
                  </h3>
                )
              case 'preview-end':
                return <button key={textObject.text}>{textObject.text}</button>
              default:
                return <p key={textObject.text}>{textObject.text}</p>
            }
          })}
        </div>
        <div className="relative min-w-max w-full xxs:w-80 h-48 md:h-40 lg:h-32 order:1 xxs:order-2">
          <Image
            src={blog.photoURL}
            layout="fill"
            alt="Students studying on college lawn"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

function PopularPost({ children }: { children: string }) {
  return (
    <h4 className="text-xl mb-8 hover:cursor-pointer hover:text-cyan-600">
      {children}
    </h4>
  )
}

const popularPosts = [
  'Practice Self Care For An Energy Boost',
  'Super Foods for Studying',
  'What College Admissions Staff Are Thinking',
  '4 Questions you should try and ask your student while away',
  'Covid 19- The Latest',
]

export function GYBlogPage() {
  const searchInputRef = React.useRef<HTMLInputElement>(null)
  const mailingListInputRef = React.useRef<HTMLInputElement>(null)

  return (
    <>
      <div className="flex items-end w-full h-56 bg-gradient-to-l from-cyan-900 to-cyan-700">
        <div className="flex flex-col items-stretch w-11/12 xxs:w-9/12 sm:w-7/12 md:w-5/12 lg:w-4/12 xl:w-3/12 rounded-md mx-auto mb-4 ">
          <h2 className="text-3xl xl:text-4xl text-white">Search Blogs</h2>
          <Input
            placeholder="self-care"
            inputRef={searchInputRef}
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center w-full px-4 xs:px-12 max-w-screen-2xl mx-auto sm:mt-6">
        <div className="w-full md:w-8/12 mb-12">
          <section className="w-full mx-auto">
            {blogs.map(blog => {
              return <BlogPost key={blog.title} blog={blog} />
            })}
          </section>
        </div>
        <div className="md:flex flex-col items-stretch md:ml-16 w-10/12 mx-auto md:w-3/12 xl:w-3/12 pt-4">
          <div className="">
            <h3 className="text-3xl xl:text-4xl mb-4 text-cyan-900 border-b-1 pb-4">
              Popular Posts
            </h3>
            <div className="w-full text-cyan-900 rounded">
              {popularPosts.map(popularPost => {
                return (
                  <PopularPost key={popularPost}>{popularPost}</PopularPost>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-full bg-white z-10 pt-16"></div>
    </>
  )
}
