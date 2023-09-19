async function createList(data) {
    return data.map(({ name }) => `<option value="${name}">${name}</option>`).join('');
}

export { createList };