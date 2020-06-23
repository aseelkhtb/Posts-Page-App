
let comments=[];
fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json())
        .then(
            (result) =>{
                comments=result
            }
        )

 function getComments(id){
     debugger;
    return comments.find(u => u.postId === id);
}
export default getComments
