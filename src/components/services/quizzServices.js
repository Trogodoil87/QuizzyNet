const baseUrl = "http://localhost:3030/data/quizz"

export const getAll = async () => {
    try {
        const response = await fetch(baseUrl);
        
        return response;
    } catch (error) {
    }
}