async function servicesAddDich(time, ingredient, value, area, currentPageDich) {
    const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/recipes';
    const params = new URLSearchParams({
        category: value,
        page: currentPageDich,
        limit: 6,
        time: time,
        area: area,
        ingredients: ingredient
    })
    const resp = await fetch(`${BASE_URL}?${params}`);

    if (resp.t)

        if (!resp.ok) {
            throw new Error(resp.statusText);
        }

    return resp.json();
}

export { servicesAddDich };