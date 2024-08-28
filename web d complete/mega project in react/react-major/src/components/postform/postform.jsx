import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input, Select, RTE } from "../index"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import uploadfile from "../../appwrite/config"
import deleteFile from "../../appwrite/config"
import createPost from "../../appwrite/config"
import getfilepreview from "../../appwrite/config"


function postForm({ post }) {
    const { register, handlesubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.slug || "",
            content: post?.content || "",
            status: post?.status || '',
        },
    })

    const navigate = useNavigate()
    const userData = useSelector(state => state.user.userData)

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? uploadfile(data.image[0]) : null
            if (file) {
                deleteFile(post.featuredImage)
            }
            const dbPost = await updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            })
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
            }
        }
        else {
            if (file) {
                const fileId = file.$id
                data.featuredImage = fileId
                const dbPost = await createPost({
                    ...data,
                    userId: userData.$id,
                })
                if (dbPost) {
                    navigate(`post/${dbPost.$id}`)
                }
            }
        }
    }
    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .toLowerCase()
                .trim()
                .replace(/^[a-zA-Z\d\s]+/g, '-')
                .replace(/\s/g, '-')
        return ""
    }, [])
    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title, { shouldValidate: true }))
            }
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [watch, slugTransform, setValue])

    return (
        <form onSubmit={handlesubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title : "
                    placeholder="Title"
                    className="mkb-4"
                    {...register("title", { required: true })}
                />

                <Input
                    label="slug"
                    placeholder="slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true })
                    }}
                />

                <RTE label="content" control={control} defaultvalue={getValues("content")} />

            </div>

            <div className="w-1/3 px-2">
            <Input
            label="featured image"
            type="file"
            className="mb-4"
            accept="image/png , image/jpg , image/jpeg , image/gif"
            {...register("image",{required:!post})}
            />

            {post && (
                <div className="w-full mb-4">
                    <img src={getfilepreview(post.featuredImage)} alt={post.title} className="rounded-lg" />
                </div>
            )}

            <Select
            options={["active","inactive"]}
            label="status"
            className="mb-4"
            {...register("status",{required:true})}
            />
            

            <button type="submit" className="w-full btn btn-outline btn-primary">
                {post ? "Update" : "Submit"}
                </button>
            </div>

        </form>
    )

}

export default postForm;