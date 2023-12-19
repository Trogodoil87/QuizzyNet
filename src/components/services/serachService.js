const baseUrl = "http://localhost:3030/data/quizz";


export const search = async (category) => {
    try {
        const response = await fetch(`${baseUrl}?where=category%3D%22${category}%22`);

        return response;
    } catch (error) {
    }
}