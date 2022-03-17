import Image from 'next/image'
import { GetStaticProps } from 'next'
import sanity from 'lib/common/sanity/sanity'
import { IBlog } from 'interfaces-and-types/gy-blog/interfaces-and-types'
import { imageUrlFor } from 'lib/common/sanity/image-url-for'
import { PortableText, PortableTextReactComponents } from '@portabletext/react'

const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => (
      <div className="relative w-full h-104 my-8">
        <Image
          key="akmsdkmsdkv"
          src={imageUrlFor(value).url()}
          layout="fill"
          objectFit="contain"
          alt={value.src}
          objectPosition="left"
        />
      </div>
    ),
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-cyan-700 text-3xl my-8 font-semibold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-gray-700 text-2xl my-8 font-semibold">{children}</h2>
    ),
    normal: ({ children }) => <p className="my-4">{children}</p>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-1">
        <div className="flex">
          <span className="mr-2">{`-`}</span>
          {children}
        </div>
      </ul>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noindex nofollow' : undefined}
          className="text-cyan-900 font-bold hover:text-cyan-700 hover:underline"
        >
          {children}
        </a>
      )
    },
  },
}

export function BlogPage({ blogPost }: { blogPost: IBlog }) {
  return (
    <article className="py-12">
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto py-24 px-16">
        {blogPost && (
          <div className="relative w-full h-104 mb-8">
            <Image
              objectFit="cover"
              layout="fill"
              src={imageUrlFor(blogPost.mainImage).url()}
              alt={blogPost.title}
            ></Image>
          </div>
        )}
        <h1 className="text-5xl text-cyan-900 mb-4">{blogPost?.title}</h1>
        <div className="text-xl">
          {blogPost?.body.map(bodyElement => {
            return (
              <PortableText
                key={bodyElement._key}
                value={bodyElement}
                components={components}
              />
            )
          })}
        </div>
      </div>
    </article>
  )
}

export async function getStaticPaths() {
  return {
    paths: ['/gy-blog/d95c9c55-c8ff-4338-b7b6-1e744500ba57'],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const query = `*[_type == 'post' && _id == $id]`

  let queryParams = {}

  if (context.params && context.params.blogId !== undefined) {
    queryParams = { id: context.params.blogId }
  }

  const blogPost = await sanity.fetch<IBlog[]>(query, queryParams)

  return {
    props: {
      blogPost: blogPost[0],
    },
  }
}

export default BlogPage
