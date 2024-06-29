let json = `{
    "activity":"Start a collection",
    "type":"recreational","participants":1,
    "price":0,"link":"",
    "key":"1718657",
    "accessibility":0.5
}`
console.log(json.activity)   // undefined as trying to access json file like this
// converting json to java

let java = JSON.parse(json)
console.log(java)

console.log(java.activity)   // work properly as now it is java
let a = {
    name : "ishant" ,
    class : 5 ,
};
console.log(a)
console.log(a["name"])
// coverting java to json
let d = JSON.stringify(java)
console.log(d)

