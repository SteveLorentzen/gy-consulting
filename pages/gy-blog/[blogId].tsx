import { useRouter } from 'next/router'
import Image from 'next/image'
import { blogs } from 'screens/gy-blog/constants'
import { getBlogPostById } from 'screens/gy-blog/constants'

export default function BlogPage() {
  const router = useRouter()

  let blogPost

  if (typeof router.query.blogId === 'string') {
    blogPost = getBlogPostById(router.query.blogId)
  }

  return (
    <>
      <div className="h-40 bg-cyan-800"></div>
      <div className="flex flex-col justify-center items-center p16 max-w-screen-lg mx-auto p-16">
        {blogPost && (
          <div className="relative w-full h-104 mb-8">
            <Image
              objectFit="cover"
              layout="fill"
              src={blogPost?.photoURL}
              alt={blogPost?.title}
            ></Image>
          </div>
        )}

        <div>
          <h1 className="text-3xl text-cyan-900 font-semibold mb-8">
            {blogPost?.title}
          </h1>
          {blogPost?.content.map(textObject => {
            switch (textObject.type) {
              case 'paragraph':
                return (
                  <p key={textObject.text} className="text-xl my-4">
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
      </div>
    </>
  )
}
