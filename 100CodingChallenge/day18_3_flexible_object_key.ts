/*

Question 54: Making Flexible Object Keys: Learn how to set up a list 
where you can change the name of each section based on what you need 
at that moment, like adjusting labels based on user choices.

Explain & TIP: This is like having labels you can rewrite anytime, which 
is great for when you need to adjust your list based on new information.

*/


interface ObjType {
    [key:string] : any
}

function dynamicObjKey (key:string,value:string) {

    let dynamicObject : ObjType= {};

    //passing parameters into object

    dynamicObject [key] = value;

    return dynamicObject;

}

console.log(dynamicObjKey("programming","TypeScript"));



