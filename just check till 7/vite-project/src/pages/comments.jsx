import React from 'react';
import { useForm } from 'react-hook-form';
import { Client, Databases, ID } from 'appwrite';
import conf from '../conf/conf';
import { getPost } from '../appwrite/config';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const AddComment = ({ postId, onNewComment }) => {
  // Initialize the form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const user = useSelector((state) => state.auth.userData);

  // Initialize the Appwrite client and databases
  const client = new Client();
  const databases = new Databases(client);

  client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

  const onSubmit = async (data) => {
    try {
      // Step 1: Create the comment in the comments collection
      const commentResponse = await databases.createDocument(
        '66c49130002c58140821', // Replace with your comments collection ID
        '66d45230001f221e8b25', // Replace with your comments collection ID
        ID.unique(), // Generates a unique ID for the comment
        {
          postId, // Associate the comment with the post using Document ID
          text: data.comment, // The actual comment content
          author: user.name || 'Anonymous',
          createdAt: new Date().toISOString(), // Timestamp for the comment
        }
      );

      // Step 2: Update the post document to include the comment's ID
      const postResponse = await getPost(postId);

      const updatedComments = postResponse.comments
        ? [...postResponse.comments, commentResponse.$id]
        : [commentResponse.$id];

      // Update the post document with the new comments array
      await databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        postId,
        { comments: updatedComments } // Update the comments field with the new array
      );

      // Notify the parent component about the new comment
      if (onNewComment) {
        onNewComment(commentResponse);
      }

      toast.success('Comment added successfully');
      reset(); // Clear the form after successful submission
    } catch (error) {
      console.error('Error adding comment or updating post:', error);
      toast.error('Failed to add comment.');
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block mb-2 text-gray-700 font-semibold">Add a Comment</label>
        <textarea
          {...register('comment', { required: 'Comment is required' })}
          placeholder="Write your comment..."
          className={`w-full p-4 border ${
            errors.comment ? 'border-red-500' : 'border-gray-300'
          } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
        />
        {errors.comment && (
          <p className="text-red-500 text-sm mt-1">{errors.comment.message}</p>
        )}

        <div className="mt-4 flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Adding...' : 'Add Comment'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddComment;
