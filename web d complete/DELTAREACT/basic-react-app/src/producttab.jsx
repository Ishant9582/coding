import Tab from "./tab.jsx"
// function producttab() {
//     return (
//         <div>
//             <Tab />
//             <Tab />
//             <Tab />
//         </div>
//     )
// }

// using props

// function producttab() {
//     return (
//         <div>
//             <Tab title = "nice" price={1000}/>
//             <Tab title = "gangu" price = {2000}/>
//             {/* // in below one we willl not pass any price to check default value */}
//             <Tab title = "jaiiii" />
//         </div>
//     )
// }

// using arrays
function producttab() {
    let a = ["x" , "y" , "z"];
    return (
        <>
            <Tab title = "nice" price={1000} features={a} />
            <Tab title = "gangu" price = {2000} features={a} />
            {/* // in below one we willl not pass any price to check default value */}
        </>
    ) ;
}
export default producttab ;
