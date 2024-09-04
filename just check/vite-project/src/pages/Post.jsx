import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getPost, deletePost, deleteFile} from "../appwrite/config";
import { Container } from "../components";
import ImageGallery from '../components/image'
import { useSelector } from "react-redux";
import AddComment from "./comments";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
 
    useEffect(() => {
       // console.log(userData)
        if (slug) {
            
            getPost(slug)
                .then((fetchedPost) => {
                    //console.log(fetchedPost)
                    if (fetchedPost) {
                        setPost(fetchedPost);
                    } else {
                        navigate("/");
                    }
                })
                .catch((error) => {
                    console.error("Failed to fetch post:", error);
                    navigate("/");
                });
        } else {
            navigate("/");
        }
    }, [slug, navigate]);

    const handleDeletePost = () => {
        console.log(post.$id)
        deletePost(post.$id)
            .then((status) => {
                if (status) {
                    deleteFile(post.image)
                        .then(() => navigate("/"))
                        .catch((error) => console.error("Failed to delete file:", error));
                }
            })
            .catch((error) => console.error("Failed to delete post:", error));
    };
   
    
    return post ? (
        <div className="flex flex-col items-center justify-center min-h-screen mt-8 mb-8">
            <Container>
                <div className="flex flex-row items-center justify-center space-x-5">
                     <ImageGallery imageName={post.image} />
                </div>

                <div class="text-center">
                        <h2 className="text-2xl font-bold">{post.Title}</h2>
                        <div className='p-3 max-w-5xl mx-auto postContent' dangerouslySetInnerHTML={{ __html: post.content }}></div>
                        <div className="">
                            <Link to={`/edit-post/${post.$id}`}>
                                <button className="bg-green-500 text-white px-4 py-2 rounded mr-3">
                                    Edit
                                </button>
                            </Link>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded"
                                onClick={handleDeletePost}
                            >
                                Delete
                            </button>
                             
                        </div>
                        
                        <AddComment postId={post.$id}/>
                    </div>
                    <h1>{post.comments[0].text}</h1>
                    <h1>{post.comments[1].text}</h1>

            </Container>
            
        </div>
    ) : null;
}
