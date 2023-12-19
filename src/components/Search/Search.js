import { useState } from "react";
import styles from "./Search.module.css";
import { CatalogItem } from "../Catalog/CatalogItem/CatalogItem";

import * as searchService from "../services/serachService";


export const Search = () => {
    const [searchWord, setSearchWord] = useState("");
    const [quizzes, setQuizzes] = useState([]);

    const onChangeHandler = (e) => {
        setSearchWord(e.target.value);
    }

    const onSearchClickHandler = (e) => {
        searchService.search(searchWord)
            .then(res => res.json())
            .then(foundItems => {
                setQuizzes(foundItems);
            })
    }



    return (
        <>
            <section id="search" className={styles.section}>
                <div>
                    <div>
                        <h2>best place to find and explore that all you need </h2>
                        <p>
                            Find Best Quizzes and practice like never before
                        </p>
                    </div>
                    <div>
                        <div>
                            <h3>Quizz?</h3>
                            <div >
                                <span>
                                    <label htmlFor="search">Search by category: </label>
                                    <input onChange={onChangeHandler} type="text" placeholder="EX: HTML, Java, Css" name="search" value={searchWord} />
                                    <button onClick={onSearchClickHandler} className={styles.searchButtonEffect}>
                                        search
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

            </section >
            <div>
                {quizzes.length > 0 ?
                    quizzes.map(quizz => <CatalogItem key={quizz._id} quizz={quizz} />)
                    : <div>
                        <h1>Quizz not found!</h1>
                    </div>}
            </div>

        </>
    );
}