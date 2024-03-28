const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {
        contactFetch: [

        ],
        contactData: {}
      },
      actions: {
        getContacts: () => {
				
            fetch("https://playground.4geeks.com/apis/fake/contact/agenda/losperros",
            
        
            )
            .then((response) => { return response.json();
            })
            .then(data => 
                setStore({contactFetch: data}))
                .catch((error)=>{console.log("error", error)})
                
    },
        handleChange: (e) => {
          const store = getStore();
          const updatedContactData = {
            ...store.contactData,
            [e.target.name]: e.target.value,

          }

          setStore({
            ...store,
            contactData: updatedContactData
          })
          // console.log("probando handleChange",  store.contactData)
          console.log( "prueba", store.contactData)

        },

        handleClick: () => {

          const  store  = getStore();
          const sendData = {
            ...store.contactData,
            agenda_slug: "losperros"
          }
          console.log("Datos a enviar a la API:", sendData)

          fetch("https://playground.4geeks.com/apis/fake/contact/", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(sendData)
          })
          .then(response => response.json())
          .then(data => {
              console.log("Respuesta del API:", data);
          })
          .catch(error => console.error("Error :", error));

      },
      
      handleEliminar: (e) => {
        const store = getStore();
        const updatedContacts = [...store.contactFetch];
        updatedContacts.splice(e, 1);
        setStore({contactFetch: updatedContacts })
      }

      },
    };
  };
  
  export default getState;

//  1) hacer un post de lo siguiente para partir
  
//   {
//     "full_name": "Lupe",
//     "email": "guau@gmail.com",
//     "agenda_slug": "losperros",
//     "address":"perrito",
//     "phone":"1234"
// }

// 2) hacer un get de https://playground.4geeks.com/apis/fake/contact/agenda

// y aparece la agenda creada

// 3) 