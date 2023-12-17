

export const Edit = () => {
    return (
        <section id="edit-page">
            <form id="edit">
                <div className="container">

                    <h1>Edit Quizz</h1>
                    <label htmlFor="leg-title">Category:</label>
                    <input type="text" id="title" name="title" />

                    <label htmlFor="category">Question:</label>
                    <input type="text" name="category" />

                    <label htmlFor="answer-a">Answer A:</label>
                    <input type="number" name="answer-a" min="1" />

                    <label htmlFor="answer-b">Answer B:</label>
                    <input type="number" name="answer-b" min="1" />

                    <label htmlFor="answer-c">Answer C:</label>
                    <input type="number" name="answer-c" min="1" />

                    <label htmlFor="answer-d">Answer D:</label>
                    <input type="number" name="answer-d" min="1" />

                    <label htmlFor="correct-answer">Correct Answer:</label>
                    <input type="number" name="correct-answer" min="1" />

                    <label htmlFor="imageUrl">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" />

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description"></textarea>
                    <input className="btn submit" type="submit" value="Edit Quizz" />

                </div>
            </form>
        </section>
    );
}