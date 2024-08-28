import { Client, ID, Databases, Storage, Query } from "appwrite";

import conf from "../conf/conf"


export const client = new Client()
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);

export const databases = new Databases(client);

export const bucket = new Storage(client)

// create
export async function  createPost({title , slug , content , image,status,userId}){
    try{
             return await databases.createDocument(
                conf.appwriteDatabaseId ,
                conf.appwriteCollectionId,
                slug,
                {
                    title ,
                    content ,
                    image ,
                    status ,
                    userId ,
                }        
             )
    }catch(err){
        console.log("error found",err)
    }

}

// update
 export async function updatePost(slug , {title , content , image,status,userId}){
    try{
        await databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug ,
            {
                title ,
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
 export async function deletepost({slug}){
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
export async function getpost({slug}){
    try{
        await databases.getDocument(
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
        await databases.listDocuments(
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
        bucket.createFile(
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
export async function getfilepreview(fileId) {
    conf.appwriteBucketId,
    fileId
}