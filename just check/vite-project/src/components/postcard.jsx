import React from "react";
import {Link} from "react-router-dom"
import ImageGallery from './image'
function PostCard({$id, Title, image}) {
    return (
      <Link to={`/post/${$id}`}>
          <div className='w-full bg-gray-100 rounded-xl p-4'>
              <div className='w-full justify-center mb-4'>
                  
              <ImageGallery image={image} />
              </div>
              <h2
              className='text-xl font-bold'
              >{Title}</h2>
          </div>
      </Link>
    )
  }
  
  
  export default PostCard