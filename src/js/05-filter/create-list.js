async function createListIngredients(data) {
    return data.map(({ _id, name }) => `<option value="${_id}">${name}</option>`).join('');
}

async function createListArea(data) {
    return data.map(({ name }) => `<option value="${name}">${name}</option>`).join('');
}

export { createListIngredients, createListArea };