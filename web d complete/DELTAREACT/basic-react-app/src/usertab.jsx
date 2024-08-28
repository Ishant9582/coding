function User({username , textcolor}){
    return(
        <div>
            <h1 style={{color : textcolor}}>hello {username}</h1>
        </div>
    )
}
export default User ;