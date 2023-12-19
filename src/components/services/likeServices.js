const baseUrl = "http://localhost:3030/data/likes";

export const create = async (quizzId, token) => {
    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify({
                id: quizzId,
                likes: 0
            }),
        });

        return response;
    } catch (error) {

    }
}

export const getById = async (quizzId) => {
    try {
        const response = await fetch(`${baseUrl}?where=id%3D%22${quizzId}%22`);

        return response;
    } catch (error) {
    }
}