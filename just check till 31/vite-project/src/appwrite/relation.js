import { Client, Databases } from 'appwrite';

export const client = new Client();
export const databases = new Databases(client);

client
.setEndpoint(conf.appwriteUrl)
.setProject(conf.appwriteProjectId);


export  async function addComment(postid, text , userid) {
    try {
        const promise = await databases.createDocument(
            '[6c49130002c58140821]',
            '[66d34f2a00046e64959a]',
            'unique()', // Generate a unique ID for the comment
            {
                postId: postid,      // Link the comment to the post
                commentText: text,
                authorId: userid,    // The ID of the user posting the comment
                createdAt: new Date().toISOString()
            }
        );
        console.log('Comment added successfully:', promise);
    } catch (error) {
        console.error('Failed to add comment:', error);
    }
}
