import { useContext } from "react";

import styles from "./Create.module.css"
import { QuizzContext } from "../context/QuizzContext";
import * as quizzService from "../services/quizzServices";
// import * as likesService from "../services/likeServices";

export const Create = ({
    createQuizz,
}) => {
    const { user } = useContext(QuizzContext);


    const onSubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const category = formData.get('category');
        const imageUrl = formData.get('imageUrl');
        const level = formData.get('level');
        const description = formData.get('description');


        if (category && imageUrl && description && level) {
            const token = localStorage.getItem('token');
            quizzService.create({ category, level, imageUrl, description, owner: user.email }, token)
                .then(res => res.json())
                .then(quizzData => {
                    // likesService.create(quizzData._id, token)
                    // .then(res => res.json())
                    // .then(result => {
                    // });
                    createQuizz(quizzData);
                });
        }
    };


    return (
        <section className={styles.section}>
            <div className="wrapper">
                <form onSubmit={onSubmitHandler}>
                    <h1>Create</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Category" required name="category" autoComplete="on" />
                        <i className='bx bxs-category' ></i>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Image Url" required name="imageUrl" autoComplete="on" />
                        <i className='bx bxs-image-add' ></i>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Description" required name="description" autoComplete="on" />
                        <i className='bx bx-text' ></i>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Level" required name="level" autoComplete="on" />
                        <i className='bx bxs-hard-hat'></i>
                    </div>

                    <button type="submit" className="btn">Create</button>
                </form>
            </div>
        </section>
    );
}