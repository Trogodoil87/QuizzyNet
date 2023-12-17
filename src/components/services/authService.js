const baseUrl = "http://localhost:3030/users"

export const register = async (email, password) => {
    const response = await fetch(`${baseUrl}/register`, {
        method: "POST",
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    return response;
}

export const login = async (email, password) => {
    const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    return response;
}