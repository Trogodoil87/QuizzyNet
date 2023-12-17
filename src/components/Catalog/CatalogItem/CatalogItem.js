import styles from "./CatalogItem.module.css";
export const CatalogItem = () => {
    return (
        <div className={styles['catalog-item']}>
            <div>
                <img className={styles['catalog-item-img']} src="assets/quizImg.jpg" alt="quizz item" />
            </div>
            <div className={styles['catalog-item-title']}>
                <h1>HTML</h1>
                <h2 >
                    <a className={styles['catalog-item-link']} href="#">Begin Quizz</a>
                    <a className={styles['catalog-item-link']} href="#">Edit</a>
                    <a className={styles['catalog-item-link']} href="#">Delete</a>
                </h2>
                <h4 className={styles['catalog-item-author']}>posted <span>by</span> <a className={styles['catalog-item-link']} href="#">admin</a>Level: <span>Beginner</span></h4>
                <p className={styles['catalog-item-description']}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet velit vitae perferendis ullam ea consectetur modi voluptatibus, officiis sapiente? Harum blanditiis minima corrupti praesentium voluptatibus quas hic distinctio quis placeat.
                </p>
            </div>
        </div>
    );
}