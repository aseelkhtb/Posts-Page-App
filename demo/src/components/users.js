
let users=[];
fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
        .then(
            (result) =>{
                    users=result
            }
        )

 function getUser(id){
    return users.find(u => u.id == id);
}
export default getUser
