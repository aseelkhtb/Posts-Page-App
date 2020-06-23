
let posts=[];
fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
        .then(
            (result) =>{
                    posts=result
            }
        )

 function getPost(id){
    return posts.find(u => u.id === id);
}
export default getPost
