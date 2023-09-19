export async function getRecipesByID(arr) {
    const responses = arr.map(async id => {
      const resp = await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${id}`);
      if (!resp.ok) {
        return Promise.reject(resp.statusText);
      }
      return resp.json();
    })
    const data = await Promise.allSettled(responses);
  
    return data
      .filter(({ status }) => status === "fulfilled")
      .map(({ value }) => value);
  }