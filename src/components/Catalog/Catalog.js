import { useContext, useEffect } from "react";

import styles from "./Catalog.module.css";
import * as quizzService from "../services/quizzServices";
import { CatalogItem } from "./CatalogItem/CatalogItem";
import { QuizzContext } from "../context/QuizzContext";

export const Catalog = () => {
    const { onCatalogRefresh, quizzes } = useContext(QuizzContext);
    useEffect(() => {
        quizzService.getAll()
            .then(res => res.json())
            .then(result => {
                onCatalogRefresh(result);
            })
    }, [onCatalogRefresh]);

    return (
        <section className={styles.section}>
            < div className={styles['section-catalog-container']} >
                <div className={styles['section-header']}>
                    <h2>Quizzes</h2>
                    <p>Always up to date with our latest Quizz Test </p>
                </div>
                <div className={styles['section']}>
                    {quizzes.length > 0
                        ? quizzes.map(quizz => <CatalogItem key={quizz._id} quizz={quizz} />)
                        : <div>
                            <h1>Nobody posted a Quizz yet! </h1>
                        </div>}
                </div>
            </div >
        </section >
    );
}