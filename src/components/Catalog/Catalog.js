import { CatalogItem } from "./CatalogItem/CatalogItem";

export const Catalog = () => {
    return (
        <section id="blog" className="blog" >
            <div className="container">
                <div className="section-header">
                    <h2>Quizzes</h2>
                    <p>Always up to date with our latest Quizz Test </p>
                </div>
                <div className="blog-content">
                    <div className="row">
                        <CatalogItem />
                    </div>
                </div>
            </div>

        </section>
    );
}