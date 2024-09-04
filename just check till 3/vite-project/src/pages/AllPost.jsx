import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import {getPosts} from "../appwrite/config";

function AllPosts() {
    console.log("entering all post section")
    const [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts([]).then((posts) => {
            if (posts) {
                console.log("getting posts")
                setPosts(posts.documents)
            }
        })
    }, [])

  return (
    <div className='max-w-7xl mx-auto p-8'>
        <h1 className='text-4xl font-semibold text-gray-800 mb-8'>All Posts</h1>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts