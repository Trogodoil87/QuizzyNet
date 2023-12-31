import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import styles from "./Create.module.css"
import { QuizzContext } from "../context/QuizzContext";
import * as quizzService from "../services/quizzServices";

export const Create = ({
    createQuizz,
}) => {
    const { user } = useContext(QuizzContext);
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const category = formData.get('category');
        const level = formData.get('level');
        const question = formData.get('question');
        const answerA = formData.get('answer-a');
        const answerB = formData.get('answer-b');
        const answerC = formData.get('answer-c');
        const answerD = formData.get('answer-d');
        const correctAnswer = formData.get('correct-answer');
        const imageUrl = formData.get('imageUrl');
        const description = formData.get('description');


        if (category && question && answerA && answerB && answerC && answerD && correctAnswer && imageUrl && description && level) {
            const token = localStorage.getItem('token');
            quizzService.create({ category, level, question, answerA, answerB, answerC, answerD, correctAnswer, imageUrl, description, owner: user.email }, token)
                .then(res => res.json())
                .then(quizzData => {
                    createQuizz(quizzData);
                    navigate('/catalog');
                });
        }
    };


    return (
        <section className={styles.section}>
            <form id="create" onSubmit={onSubmitHandler}>
                <div className="container">
                    <h1 className={styles.headingStyle}>Create Quizz</h1>
                    <div>
                        <label className={styles.labelStyle} htmlFor="category">Category:</label>
                        <input className={styles.inputHoverColor} type="text" name="category" />

                        <label className={styles.labelStyle} htmlFor="imageUrl">Image Url:</label>
                        <input className={styles.inputHoverColor} type="text" name="imageUrl" />

                    </div>
                    <div>
                        <label className={styles.labelStyle} htmlFor="question">Question:</label>
                        <input className={styles.inputHoverColor} type="text" name="question" />

                        <label className={styles.labelStyle} htmlFor="description">Description:</label>
                        <textarea name="description"></textarea>
                    </div>
                    <div>
                        <label className={styles.labelStyle} htmlFor="answer-a">Answer A:</label>
                        <input className={styles.inputHoverColor} type="text" name="answer-a" min="1" />
                        <label className={styles.labelStyle} htmlFor="answer-b">Answer B:</label>
                        <input className={styles.inputHoverColor} type="text" name="answer-b" min="1" />
                    </div>
                    <div>

                        <label className={styles.labelStyle} htmlFor="answer-c">Answer C:</label>
                        <input className={styles.inputHoverColor} type="text" name="answer-c" min="1" />
                        <label className={styles.labelStyle} htmlFor="answer-d">Answer D:</label>
                        <input className={styles.inputHoverColor} type="text" name="answer-d" min="1" />
                    </div>
                    <label className={styles.labelStyle} htmlFor="correct-answer">Correct Answer:</label>
                    <input className={styles.inputHoverColor} type="text" name="correct-answer" min="1" />
                    <label className={styles.labelStyle} htmlFor="level">Level:</label>
                    <input className={styles.inputHoverColor} type="text" name="level" />
                    <div>
                        <input className={styles.createButtonEffect} type="submit" value="Create Quizz" />
                    </div>
                </div>
            </form>
        </section>
    );
}