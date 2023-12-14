require('node-fetch')
const fetchUser = async (username)=>{
    let response = await fetch('https://api.github.com/users/'+username);
    if(response.status===200){
        let data = await response.json()
        return data;
    }
    else{
        return {
            status: response.status,
            error:response.statusText
        }
    }
fetchUser('ram1uj').then(response=> console.log(response)).catch(error=>console.log(error))
}