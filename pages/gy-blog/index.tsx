import * as React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { imageUrlFor } from 'utils/image-url-for'

import { Input } from 'components/input'

import sanity from 'lib/sanity'

interface IBlogPreview {
  _id: string
  title: string
  excerpt: string
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
      className="flex flex-col items-center w-full mx-auto py-6 border-b-1 pb-8 hover:cursor-pointer hover:bg-gray-50"
      onClick={() => navigateToBlog(blog._id)}
    >
      <div className="w-full flex flex-col xxs:flex-row items-center xxs:items-start">
        <div className="flex flex-col  xxs:items-start xxs:mr-4 w-full xxs:pr-8 order-2 xxs:order-1">
          <h2 className="text-2xl text-cyan-900 font-bold mb-4 my-4 xxs:my-0 xxs:mb-2">
            {blog.title}
          </h2>
          <p>{blog.excerpt}</p>
        </div>
        <div className="relative min-w-max w-full xxs:w-80 h-48 md:h-40 lg:h-32 order:1 xxs:order-2">
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

export function GYBlogPage({ blogs }: { blogs: IBlogPreview[] }) {
  const [searchInput, setSearchInput] = React.useState('')
  const [filteredBlogs, setFilteredBlogs] = React.useState(blogs)
  const [timer, setTimer] = React.useState<NodeJS.Timeout | undefined>()

  console.log(blogs)

  React.useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchInput.length === 0) {
        setFilteredBlogs(blogs)
      } else {
        setFilteredBlogs(
          blogs.filter(blog => {
            return blog.title.toLowerCase().includes(searchInput.toLowerCase())
          }),
        )
      }
    }, 500)
    setTimer(debounceTimer)
    if (timer) {
      return clearTimeout(timer)
    }
  }, [searchInput, blogs, timer])

  const mailingListInputRef = React.useRef<HTMLInputElement>(null)

  return (
    <>
      <div className="flex items-end w-full h-56 bg-gradient-to-l from-cyan-900 to-cyan-700">
        <div className="flex flex-col items-stretch w-11/12 xxs:w-9/12 sm:w-7/12 md:w-5/12 lg:w-4/12 xl:w-3/12 rounded-md mx-auto mb-4 ">
          <h2 className="text-3xl xl:text-4xl text-white">Search Blogs</h2>
          <Input
            placeholder="self-care"
            type="text"
            onChange={e => setSearchInput((e.target as HTMLInputElement).value)}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center w-full px-4 xs:px-12 max-w-screen-2xl mx-auto sm:mt-6">
        <div className="w-full md:w-8/12 mb-12">
          <section className="w-full mx-auto">
            {filteredBlogs.map(blog => {
              return <BlogPost key={blog._id} blog={blog} />
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

export async function getStaticProps() {
  const query = `*[_type == "post"]{
	_id, 
	title,
	mainImage,
	excerpt,
  }`

  const blogs = await sanity.fetch(query)

  return {
    props: {
      blogs,
    },
  }
}

export default GYBlogPage