'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useData } from '@/lib/data/data-context'
import { BlogPost } from '@/lib/data/blog-interfaces'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const dataProvider = useData()

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const posts = await dataProvider.getBlogPosts()
        setBlogPosts(posts)
      } catch (error) {
        console.error('Failed to fetch blog posts:', error)
      }
    }

    fetchBlogPosts()
  }, [dataProvider])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-secondary">Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground mb-2">
                By {post.author} | {new Date(post.date).toLocaleDateString()}
              </p>
              <p>{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/blog/${post.id}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

