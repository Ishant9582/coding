import React, { useState } from 'react';
import { Client, Databases, ID } from 'appwrite';
import conf from '../conf/conf';
import { getPost } from '../appwrite/config';
const AddComment = ({ postId }) => {
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Initialize the Appwrite client and databases
  const client = new Client();
  const databases = new Databases(client);

  client
  .setEndpoint(conf.appwriteUrl)
  .setProject(conf.appwriteProjectId);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Step 1: Create the comment in the comments collection
      const commentResponse = await databases.createDocument(
        '66c49130002c58140821',
        '66d45230001f221e8b25', // Replace with your comments collection ID
        ID.unique(),              // Generates a unique ID for the comment
        {
          postId,                 // Associate the comment with the post using Document ID
          text: comment || "",       // The actual comment content
          author :  " ",
          createdAt: new Date().toISOString(), // Timestamp for the comment
          
        }
      );
      const slug = postId
      // Step 2: Update the post document to include the comment's ID
      const postResponse = await getPost(slug)
      
      console.log("hello")
      // If comments field exists, append the new comment ID. Otherwise, initialize it.
      const updatedComments = postResponse.comments ? [...postResponse.comments, commentResponse.$id] : [commentResponse.$id];
      console.log("next")
      // Update the post document with the new comments array
      await databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        postId,
        { comments: updatedComments } // Update the comments field with the new array
      );

      console.log('Comment added and post updated successfully:', commentResponse);
      setComment(''); // Clear the comment input after successful submission
    } catch (error) {
      console.error('Error adding comment or updating post:', error);
      setError('Failed to add comment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add your comment..."
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md"
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add Comment'}
        </button>
        {error && <p className="mt-2 text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default AddComment;


    
