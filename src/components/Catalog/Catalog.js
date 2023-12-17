import { CatalogItem } from "./CatalogItem/CatalogItem";
import styles from "./Catalog.module.css";

export const Catalog = () => {
    return (
        <section className={styles['section-catalog']}>
            < div className={styles['section-catalog-container']} >
                <div className={styles['section-header']}>
                    <h2>Quizzes</h2>
                    <p>Always up to date with our latest Quizz Test </p>
                </div>
                <div className={styles['section-content']}>
                    <CatalogItem />
                    <CatalogItem />
                    <CatalogItem />
                    <CatalogItem />
                    <CatalogItem />
                    <CatalogItem />
                    <CatalogItem />
                    <CatalogItem />
                    <CatalogItem />
                    {/* <div>
                        <h1>Nobody posted a Quizz yet! </h1>
                    </div> */}
                </div>
            </div >
        </section >
    );
}