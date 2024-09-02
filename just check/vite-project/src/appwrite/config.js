import { Client, ID, Databases, Storage, Query } from "appwrite";

import conf from "../conf/conf"


export const client = new Client()
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);

export const databases = new Databases(client);

export const bucket = new Storage(client)

// create
export async function  createPost({Title , slug , content , image,status,userid}){
    try{
        console.log(slug)
             return await databases.createDocument(
                conf.appwriteDatabaseId ,
                conf.appwriteCollectionId,
                slug,
                {
                    Title ,
                    content ,
                    image ,
                    status ,
                    userid ,
                }        
             )
    }catch(err){
        console.log("error found",err)
    }

}

// update
 export async function updatePost(slug , {Title , content , image,status,userid}){
    try{
        await databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug ,
            {
                Title ,
                content ,
                image ,
                status ,
            }
        );   
    }catch(err){
        console.log("err",err)
    }
 }


 // delete
 export async function deletePost(slug){
    try{
        await databases.deleteDocument(
            conf.appwriteDatabaseId, // databaseId
            conf.appwriteCollectionId, // collectionId
            slug , // documentId
        )
        return true ;
    }catch(err){
        console.log("error in deleting",err)
        return false ;
    }
}


// get document for accessing single post
export async function getPost(slug){
    try{
        return await databases.getDocument(
            conf.appwriteDatabaseId, // databaseId
            conf.appwriteCollectionId, // collectionId
            slug, // documentId
        )
        return true ;
    }
    catch(err){
        console.log("post not found" ,err)
        return false ;
    }
}


// get all documents
export async function getPosts(queries = [Query.equal("status","active")]){
    try{
        return await databases.listDocuments(
            conf.appwriteDatabaseId, // databaseId
            conf.appwriteCollectionId, // collectionId
            queries , 
        );
    }catch(err){
        console.log("error in fetchinfg all details",err)
        return false ;

    }
}

// for uploading file 
export async function uploadfile(file){
    try{
        console.log(file)
        return await bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file ,
        );
    }
    catch(err){
        console.log("appwrite service",err)
        return false ;
    }
}

// for deleting file

export async function deleteFile(fileId){
    try{
        await bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
    }catch(err){
        console.log("error file mot deletd",err)
        return false
    }
}

// for viewing file
// ye ek k lie shi but not foe all posts 
export async function getfilepreview(slug) {
        try {
            // Fetch the URL of the image
            const url = await bucket.getFileView(conf.appwriteBucketId , slug);
            console.log(slug)
            console.log(url); // Success: URL to the image
            
            // Assuming you have an <img> tag with id 'image-container'
            document.getElementsByClassName('image-container').src = url.href;
        } catch (error) {
            console.log(error); // Failure
        }
}

// export async function fetchAndDisplayImages([]) {
//     try {
//         const imageListContainer = document.getElementById('image-list');

//         // Loop through each file ID and fetch the image
//         for (const fileId of fileIds) {
//             const fileView = await storage.getFileView(bucketId, fileId);

//             // Create an <img> element and set its src attribute to the file URL
//             const imgElement = document.createElement('img');
//             imgElement.src = fileView.href;
//             imgElement.alt = `Image with ID ${fileId}`;
//             imgElement.style.width = '200px'; // Set width, you can adjust this

//             // Append the image to the container
//             imageListContainer.appendChild(imgElement);
//         }
//     } catch (error) {
//         console.error('Error fetching images:', error);
//     }
// }
