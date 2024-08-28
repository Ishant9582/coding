import { Client, Account, ID } from "appwrite";

import conf from "../conf/conf"
export  const client = new Client()
     .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);

export  const account  =  new Account(client) ;
export  async function createaccount({email,password,name}){
    try{
        const useraccount = await account.create
        (ID.unique() , email , password , name);
        if(useraccount){
            return login({email,password})
        }
        else{
            return useraccount ;
        }
    }
    catch(err){
        throw err ;
    }
}

export  async function login({email,password}){
    try{
        return await account.createEmailSession(email,password);

    }catch(err){
        throw err ;
    }
}

export  async function getcurrentuser(){
    try{
        return await account.get()
    }catch(err){
        console.log("appwrite service :err",err) ;
    }
    return null ;
}
export  async function Logout(){
    try{
        await account.deleteSessions() ;
    }
    catch(err){
        console.log("err",err) ;
    }
}


