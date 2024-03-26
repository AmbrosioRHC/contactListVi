const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {
        contactFetch: [

        ]
      },
      actions: {
        getContacts: () => {
				
            fetch("https://playground.4geeks.com/apis/fake/contact/agenda/amigos-perros",
            
        
            )
            .then((response) => { return response.json();
            })
            .then(data => 
                setStore({contactFetch: data}))
                .catch((error)=>{console.log("error", error)})
    }
      },
    };
  };
  
  export default getState;