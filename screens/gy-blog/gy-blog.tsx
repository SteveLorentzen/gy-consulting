import * as React from 'react'
import Image from 'next/image'

import { AiOutlineArrowRight } from '@react-icons/all-files/ai/AiOutlineArrowRight'
import { ContentContainerWithHeroImage } from 'components/content-container-with-hero-image'
import { Input } from 'components/input'

const blogs = [
  {
    title: 'College Requirements have evolved.  Are you prepared?',
    photoURL: '/images/college-lawn.jpeg',
    endPreviewIndex: 0,
    content: [
      {
        text: 'This is my blog about colleges and stuff.  I have many insights about learning things that you should listen to.  I am very smart and cool and please listen to my cool writing.',
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
    endPreviewIndex: 1,
    content: [
      {
        text: 'This is my blog about colleges and stuff.  I have many insights about learning things that you should listen to.  I am very smart and cool and please listen to my cool writing.',
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
    endPreviewIndex: 2,
    content: [
      {
        text: 'This is my blog about colleges and stuff.  I have many insights about learning things that you should listen to.  I am very smart and cool and please listen to my cool writing.',
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

const BlogPost: React.FC<{ blog: IBlog }> = ({ blog }) => {
  return (
    <div className="flex flex-col items-center w-full mx-auto mb-24">
      <div className="w-full">
        <div className="relative w-full h-96 md:h-104 lg:h-120">
          <Image
            src={blog.photoURL}
            layout="fill"
            alt="Students studying on college lawn"
            className="object-cover"
          />
        </div>
        <div className=" mx-auto w-full px-4 sm:px-0">
          <h2 className="text-4xl my-6 text-cyan-900 font-bold">
            {blog.title}
          </h2>
          {blog.content.slice(0, blog.endPreviewIndex + 1).map(textObject => {
            switch (textObject.type) {
              case 'paragraph':
                return (
                  <p key={textObject.text} className="text-xl">
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
          <button className="flex items-center mt-6 border border-cyan-900 text-cyan-900 py-2 px-6 rounded hover:text-cyan-700">
            Read More{' '}
            <span className="ml-2">
              <AiOutlineArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export function GYBlogPage() {
  const searchInputRef = React.useRef<HTMLInputElement>(null)
  const mailingListInputRef = React.useRef<HTMLInputElement>(null)

  return (
    <>
      <ContentContainerWithHeroImage
        src="/images/seoul-national-university.jpeg"
        mainHeading="GY Blog"
        subHeading="Read the latest from Global Youth staff and parents"
      >
        <div className="flex flex-col md:flex-row justify-between w-full sm:w-11/12 max-w-screen-2xl mx-auto mt-8 lg:p-8">
          <div className="w-full md:w-8/12">
            <section className="w-full mx-auto">
              {blogs.map(blog => {
                return <BlogPost key={blog.title} blog={blog} />
              })}
            </section>
          </div>
          <div className="md:flex flex-col items-stretch md:ml-10 lg:ml-20 md:w-4/12 xl:3/12 p-4 sm:p-0">
            <section className="flex flex-col items-stretch w-full text-cyan-900 rounded-md mx-auto mb-10 ">
              <h2 className="md:text-2xl lg:text-3xl xl:text-4xl mb-2">
                Search Blogs
              </h2>
              <Input
                placeholder="self-care"
                inputRef={searchInputRef}
                type="text"
              />
            </section>
            <section>
              <h3 className="md:text-2xl lg:text-3xl xl:text-4xl mb-4 text-cyan-900">
                Popular Posts
              </h3>
              <div className="w-full bg-cyan-900 p-4 rounded">
                <h4 className="text-xl text-white mb-4 hover:cursor-pointer hover:text-cyan-100">
                  Practice Self Care For An Energy Boost
                </h4>
                <h4 className="text-xl text-white mb-4 hover:cursor-pointer hover:text-cyan-100">
                  Super Foods for Studying
                </h4>
                <h4 className="text-xl text-white mb-4 hover:cursor-pointer hover:text-cyan-100">
                  What College Admissions Staff Are Thinking
                </h4>
                <h4 className="text-xl text-white mb-4 hover:cursor-pointer hover:text-cyan-100">
                  4 Questions you should try and ask your student while away
                </h4>
                <h4 className="text-xl text-white mb-4 hover:cursor-pointer hover:text-cyan-100">
                  Covid 19- The Latest
                </h4>
              </div>
            </section>
            <section className="flex flex-col w-full my-12">
              <h3 className="md:text-2xl lg:text-3xl xl:text-4xl mb-4 text-cyan-900 w-max">
                Join Mailing List
              </h3>

              <Input
                type="email"
                placeholder="email"
                inputRef={mailingListInputRef}
              />
            </section>
          </div>
        </div>
      </ContentContainerWithHeroImage>

      <div className="relative w-full h-full bg-white z-10 pt-16"></div>
    </>
  )
}
