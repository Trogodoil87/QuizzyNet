const baseUrl = "http://localhost:3030/data/quizz"

export const getAll = async () => {
    try {
        const response = await fetch(baseUrl);

        return response;
    } catch (error) {
    }
}

export const create = async (quizzData, token) => {
    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(quizzData),
        });

        return response;
    } catch (error) {

    }
}

export const getById = async (quizzId) => {
    try {
        const response = await fetch(`${baseUrl}/${quizzId}`);

        return response;
    } catch (error) {
    }
}

export const edit = async (quizzId, quizzData) => {
    try {
        const response = await fetch(`${baseUrl}/${quizzId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(quizzData),
        });

        return response;
    } catch (error) {

    }
}

export const remove = async (quizzId, userToken) => {
    try {
        const response = await fetch(`${baseUrl}/${quizzId}`, {
            method: 'DELETE',
            headers: {
                'X-Authorization': userToken
            }
        });

        return response;
    } catch (error) {

    }
}