import styles from './AboutUs.module.css';

export const AboutUs = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className="about-title">
                    <div className="about-container">
                        <h2 className="about-title">
                            About QuzzyNet:
                        </h2>
                        <p>
                            Welcome to QuzzyNet, your go-to destination for a quiz-tastic experience! At QuzzyNet,
                            we're passionate about quizzes and fostering a community of knowledge seekers. Whether you're a quiz creator or an avid participant,
                            we're here to elevate your quiz experience to new heights.
                        </p>
                    </div>

                    <div className="about-container">
                        <h3 className="about-title">
                            Our Mission:
                        </h3>
                        <p>
                            QuzzyNet is on a mission to make learning and entertainment go hand in hand. We believe in the power of quizzes to engage,
                            educate, and entertain. Our platform provides a space for quiz enthusiasts to connect, create, and challenge each other with a diverse range of quizzes.
                        </p>
                    </div>
                </div>
            </div>

        </section >
    );
}