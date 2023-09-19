async function serviceDish(dishId) {
  const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
    const END_POINT = '/recipes/';
    const resp = await fetch(`${BASE_URL}${END_POINT}${dishId}`);

    if (!resp.ok) {
      throw new Error(resp.statusText);
    }    

    const recipeDish = await resp.json();
    
    return recipeDish;
}

export { serviceDish };

// function serviceDish(dishId) {
//   const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
//   const END_POINT = '/recipes/';

//   return fetch(`${BASE_URL}${END_POINT}${dishId}`).then(resp => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   });
// }