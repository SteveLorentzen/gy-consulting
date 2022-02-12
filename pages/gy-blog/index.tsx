import * as React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { imageUrlFor } from 'lib/common/sanity/image-url-for'

import { Input } from 'components/common/input'

import sanity from 'lib/common/sanity/sanity'

interface IBlogPreview {
  _id: string
  title: string
  excerpt: string
  isFeatured: boolean
  _createdAt: Date
  author: {
    _createdAt: Date
    _id: string
    _type: string
    _updatedAt: Date
    name: string
    image: {
      src: string
    }
  }
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
}

function BlogPost({ blog }: { blog: IBlogPreview }) {
  const router = useRouter()

  function navigateToBlog(blogId: string) {
    router.push(`/gy-blog/${blogId}`)
  }

  return (
    <div
      className="flex flex-col items-center w-full mx-auto py-6 lg:px-8 border-b-1 pb-8 hover:cursor-pointer hover:bg-gray-50"
      onClick={() => navigateToBlog(blog._id)}
    >
      <div className="w-full flex flex-col xxs:flex-row items-center xxs:items-stretch">
        <div className="flex flex-col justify-between xxs:items-start xxs:mr-4 w-full xxs:pr-8 order-2 xxs:order-1 px-4 xxs:px-0">
          <div>
            <h2 className="text-2xl text-cyan-900 font-bold mb-4 my-4 xxs:my-0 xxs:mb-2">
              {blog.title}
            </h2>

            <p>{blog.excerpt}</p>
          </div>
          <div className="flex items-center mt-4 min-w-max">
            <div className="relative w-10 h-10 rounded-full overflow-hidden mr-4">
              <Image
                src={imageUrlFor(blog.author.image).url()}
                layout="fill"
                objectFit="cover"
                alt={blog.author.name}
              />
            </div>

            <h3 className="justify-self-end ">{blog.author.name}</h3>
            <h4 className="ml-4 text-sm text-gray-500">
              {new Date(blog._createdAt).toDateString()}
            </h4>
          </div>
        </div>
        <div className="relative min-w-max w-full xxs:w-80 h-64 xxs:h-48 md:h-40 lg:h-32 order:1 xxs:order-2">
          <Image
            src={imageUrlFor(blog.mainImage).url()}
            layout="fill"
            alt="Students studying on college lawn"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

function PopularPost({
  popularPost,
}: {
  popularPost: { title: string; author: string }
}) {
  return (
    <h4 className="hover:cursor-pointer mb-8 group ">
      <h5 className="text-xl  hover:cursor-pointer hover:text-cyan-600 mb-2 group-hover:text-cyan-700">
        {popularPost.title}
      </h5>
      <h6 className="text-gray-500 tracking-wide group-hover:text-cyan-700">
        {popularPost.author}
      </h6>
    </h4>
  )
}

const popularPosts = [
  { title: 'Practice Self Care For An Energy Boost', author: 'Jake Svenson' },
  { title: 'Super Foods for Studying', author: 'Jake Svenson' },
  {
    title: 'What College Admissions Staff Are Thinking',
    author: 'Jake Svenson',
  },
  {
    title: '4 Questions you should try and ask your student while away',
    author: 'Jake Svenson',
  },
  { title: 'Covid 19- The Latest', author: 'Jake Svenson' },
]

export function GYBlogPage({ blogs }: { blogs: IBlogPreview[] }) {
  const [filteredBlogs, setFilteredBlogs] = React.useState(blogs)
  const [timer, setTimer] = React.useState<NodeJS.Timeout | undefined>()

  console.log(blogs[0])

  function inputHandler(e: React.SyntheticEvent) {
    const input = (e.target as HTMLInputElement).value
    const debounceTimer = setTimeout(() => {
      if (input.length === 0) {
        setFilteredBlogs(blogs)
      } else {
        setFilteredBlogs(
          blogs.filter(blog => {
            return blog.title.toLowerCase().includes(input.toLowerCase())
          }),
        )
      }
    }, 500)
    setTimer(debounceTimer)
    if (timer) {
      return clearTimeout(timer)
    }
  }

  const mailingListInputRef = React.useRef<HTMLInputElement>(null)

  return (
    <>
      {/* <div className="w-full h-20" /> */}
      {/** this is just a spacer for the heading */}

      <div className="flex flex-col lg:flex-row justify-center items-center md:items-start w-full xxs:px-4 xs:px-12 mx-auto sm:mt-6 font-serif max-w-5xl lg:max-w-none">
        <div className="flex flex-col items-stretch w-full lg:w-2/12 rounded-md lg:mx-16 min-w-max pt-4 lg:pt-0 pb-8 px-4 xxs:px-0">
          <h2 className="text-3xl xl:text-4xl text-cyan-900 w-60">
            Search Blogs
          </h2>
          <Input placeholder="self-care" type="text" onChange={inputHandler} />
        </div>
        <div className="w-full lg:w-1/2 lg:max-w-4xl mb-12">
          <div className="flex flex-col items-center w-full">
            {filteredBlogs.map(blog => {
              if (blog.isFeatured) {
                return (
                  <div className="flex-col items-center pb-8 w-full hover:bg-gray-50 lg:px-8 border-b-1">
                    <div className="relative h-72 xxs:h-80 xs:h-96 sm:h-104 lg:h-80 xl:h-96 2xl:h-104 w-full">
                      <Image
                        src={imageUrlFor(blog.mainImage).url()}
                        layout="fill"
                        objectFit="cover"
                        alt={blog.title}
                      />
                    </div>

                    <div className="mr-24 px-4 xxs:px-0">
                      <h1 className="text-cyan-900 text-4xl my-4">
                        {blog.title}
                      </h1>
                      <p className="text-2xl mb-6 text-gray-500 tracking-wide">
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden mr-4">
                          <Image
                            src={imageUrlFor(blog.author.image).url()}
                            layout="fill"
                            objectFit="cover"
                            alt={blog.author.name}
                          />
                        </div>

                        <h2>{blog.author.name}</h2>
                        <h3 className="text-gray-500">
                          {new Date(blog._createdAt).toDateString()}
                        </h3>
                      </div>
                    </div>
                  </div>
                )
              }
            })}
          </div>
          <section className="w-full mx-auto">
            {filteredBlogs.map(blog => {
              return <BlogPost key={blog._id} blog={blog} />
            })}
          </section>
        </div>
        <div className="md:flex flex-col items-stretch w-full lg:w-3/12 xl:w-1/6 pt-4 lg:pt-0 lg:mx-16 min-w-min">
          <div className="">
            <h3 className="text-3xl xl:text-4xl mb-4 text-cyan-900 border-b-1 pb-4 w-60">
              Popular Posts
            </h3>
            <div className="w-full text-cyan-900 rounded">
              {popularPosts.map(popularPost => {
                return (
                  <PopularPost
                    key={popularPost.title}
                    popularPost={popularPost}
                  />
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

export async function getStaticProps() {
  const query = `*[_type == "post"]{
	_id, 
  _createdAt,
	title,
	mainImage,
	excerpt,
  isFeatured,
  author ->,
  }`

  const blogs = await sanity.fetch(query)

  return {
    props: {
      blogs,
    },
  }
}

export default GYBlogPage
