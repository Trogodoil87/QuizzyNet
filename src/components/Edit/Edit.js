import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as quizzService from "../services/quizzServices";
import { QuizzContext } from "../context/QuizzContext";

export const Edit = ({
    editQuizz,
}) => {
    const { user } = useContext(QuizzContext);
    const [quizz, setQuizz] = useState({});

    const navigate = useNavigate();
    const { quizzId } = useParams();

    useEffect(() => {
        quizzService.getById(quizzId)
            .then(res => res.json())
            .then(quizzData => {
                setQuizz(quizzData);
            })
    }, [quizzId]);

    const onBackButtonClickHandler = (e) => {
        e.preventDefault();
        navigate('/catalog')
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const category = formData.get('category') || "1";
        const level = formData.get('level') || "";
        const question = formData.get('question') || "";
        const answerA = formData.get('answerA') || "";
        const answerB = formData.get('answerB') || "";
        const answerC = formData.get('answerC') || "";
        const answerD = formData.get('answerD') || "";
        const correctAnswer = formData.get('correctAnswer') || "";
        const imageUrl = formData.get('imageUrl') || "";
        const description = formData.get('description') || "";

        const quizzData = { category, question, answerA, answerB, answerC, answerD, correctAnswer, imageUrl, description, level, owner: user.email };
        const token = user.accessToken;

        quizzService.edit(quizzId, quizzData, token)
            .then(res => res.json())
            .then(updatedQuizz => {
                editQuizz(updatedQuizz);
                navigate('/catalog');
            });

    }


    return (
        <section id="edit-page">
            <form id="edit" onSubmit={onSubmitHandler}>
                <div className="container">

                    <h1>Edit Quizz</h1>
                    <label htmlFor="category">Category:</label>
                    <input type="text" id="title" name="category" defaultValue={quizz?.category} />

                    <label htmlFor="question">Question:</label>
                    <input type="text" name="question" defaultValue={quizz?.question} />

                    <label htmlFor="level">Level:</label>
                    <input type="text" name="level" defaultValue={quizz?.level} />

                    <label htmlFor="answer-a">Answer A:</label>
                    <input type="text" name="answer-a" min="1" defaultValue={quizz?.answerA} />

                    <label htmlFor="answer-b">Answer B:</label>
                    <input type="text" name="answer-b" min="1" defaultValue={quizz?.answerB} />

                    <label htmlFor="answer-c">Answer C:</label>
                    <input type="text" name="answer-c" min="1" defaultValue={quizz?.answerC} />

                    <label htmlFor="answer-d">Answer D:</label>
                    <input type="text" name="answer-d" min="1" defaultValue={quizz?.answerD} />

                    <label htmlFor="correct-answer">Correct Answer:</label>
                    <input type="text" name="correct-answer" min="1" defaultValue={quizz?.correctAnswer} />

                    <label htmlFor="imageUrl">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={quizz?.imageUrl} />

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" defaultValue={quizz?.description}></textarea>
                    <input className="btn submit" type="submit" value="Edit Quizz" />
                    <button onClick={onBackButtonClickHandler}>Back</button>
                </div>
            </form>
        </section>
    );
}