import React, { useCallback, useEffect } from "react";
import { useForm} from "react-hook-form";
import { Input, Select} from "../index"
import RTE from "../RTE";
import { useNavigate } from "react-router-dom" 
import { useSelector } from "react-redux" 
import {updatePost} from "../../appwrite/config"
import {uploadfile} from "../../appwrite/config"
import {deleteFile} from "../../appwrite/config"
import {createPost} from "../../appwrite/config"

import ImageGallery from '../image'

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            Title: post?.Title || "" ,
            slug: post?.$id || "" ,
            content: post?.content || "" ,
            status: post?.status || "active" ,
        } ,
    }) ;

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        console.log(data)
        console.log("handlesubmit clicked")
        if (post) {
            const file = data.image[0] ? await uploadfile(data.image[0]) : null;
            console.log(post.image)
            if (file) {
                console.log("entered delete file section")
                deleteFile(post.image);
                console.log("file delted")
            }

            const dbPost = await updatePost(post.$id, {
                ...data,
                image : file ? file.$id : undefined,
            });
            // console.log(dbPost)

            // if (dbPost) {
                navigate(`/post/${post.$id}`);
            // }
        } else {

            // for adding post
          console.log("post is absent")
          console.log(data.image)
          console.log(data.image[0])  // file info name and all that stuf
          // uploading image in bucket
            const file = await uploadfile(data.image[0]);
            console.log(file)
            // info about file
            if (file) {
                console.log("file found")
                const fileId = file.$id;
                data.image = fileId;
                const dbPost = await createPost({ ...data, userid: userData.$id });
                console.log(dbPost)

                if (dbPost) {
                    console.log("navigation success")
                    navigate(`/`);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    useEffect(() => {
        // subscription watch the changes in form input including their value and name values using function watch 
        const subscription = watch((value, { name }) => {
            if (name === "Title") 
                // checking if changed form input is with the name of Title
                {
                // updates the value of a form field updates form field with name slug to a new derived value from title field
                //console.log(value)
                setValue("slug", slugTransform(value.Title), { shouldValidate: true });
                // slugtransform upr function usko call lgri yha 
                // form should be re-validated after value is set
            }
        });
        return () => subscription.unsubscribe();
        // subscription to form changes is properlly cleaned up to avoid memory leak 
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title" 
                    className="mb-4" 
                    {...register("Title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        console.log(e)
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <ImageGallery imageName={post.image} />
                    </div>
                )}
                <Select
                    options = {["active", "inactive"]}
                    label = "Status"
                    className = "mb-4"
                    {...register("status" , { required: true })}
                />
                <button type="submit"  className="w-full">
                    {post ? "Update" : "Submit"}
                </button>
            </div>
        </form>
    );
}