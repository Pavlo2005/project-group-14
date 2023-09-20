async function servicesList(request) {
    const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/';

    const resp = await fetch(`https://tasty-treats-backend.p.goit.global/api/${request}`);

    if (!resp.ok) {
        throw new Error(resp.statusText);
    }

    return resp.json();
}

export { servicesList };