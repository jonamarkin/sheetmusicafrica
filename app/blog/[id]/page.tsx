'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useData } from '@/lib/data/data-context'
import { BlogPost } from '@/lib/data/blog-interfaces'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogPostPage() {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null)
  const dataProvider = useData()
  const params = useParams()
  const id = params.id as string

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const post = await dataProvider.getBlogPost(id)
        setBlogPost(post)
      } catch (error) {
        console.error('Failed to fetch blog post:', error)
      }
    }

    fetchBlogPost()
  }, [dataProvider, id])

  if (!blogPost) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{blogPost.title}</CardTitle>
          <p className="text-sm text-muted-foreground">
            By {blogPost.author} | {new Date(blogPost.date).toLocaleDateString()}
          </p>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            {blogPost.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

