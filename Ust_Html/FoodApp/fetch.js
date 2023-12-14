async function getAllItems() {




    let response = await fetch('http://localhost:8500/api/food')

 

    if (response.status === 200) {

 

      let data = await response.json()

 

      console.log(data);

 

      return Promise.resolve(data);

 

    }

 

    else {

 

      console.log(response);

 

      return Promise.reject({

 

        message: `Error ${response.status}`

 

      });

 

    }

 

  }




  async function saveItem(items) {
 
    let response = await fetch('http://localhost:8080/api/customers', {
      method: 'POST',
      body: JSON.stringify(items),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })

 

    if (response.status === 200) {

 

      let data = await response.json()

 

      console.log(data)

 

      return Promise.resolve(data);

 

    }

 

    else {

 

      console.log(response)

 

      return Promise.reject({

 

        message: `Error ${response.status}`

 

      })

 

    }

 

  }




  async function deleteItemById(id){

 

    let response=await fetch('http://localhost:8500/api/food/'+id,{

 

      method:'DELETE',

 

    });

 

    if(response.status===200){

 

      console.log('Item deleted');

 

      return Promise.resolve();

 

    }

 

    else{

 

      console.log(response);

 

      return Promise.reject({

 

        message:`Error ${response.status}`,

 

      });

 

    }

 

  }