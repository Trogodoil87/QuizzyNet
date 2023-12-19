const baseUrl = "http://localhost:3030/users"

export const register = async (email, password) => {
    const response = await fetch(`${baseUrl}/register`, {
        method: "POST",
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify({ email, password, hasLikes: false })
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

export const logout = async (token) => {
    const response = await fetch(`${baseUrl}/logout`, {
        method: 'GET',
        headers: {
            'X-Authorization': token
        }
    });

    return response;
}

export const myProfile = async (token) => {
    const response = await fetch(`${baseUrl}/me`, {
        method: 'GET',
        headers: {
            'X-Authorization': token
        }
    });

    return response;
}