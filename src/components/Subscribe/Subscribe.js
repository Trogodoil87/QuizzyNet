import "./Subscribe.module.css"

export const Subscribe = () => {
    return (
        <section id="contact" className="subscription">
            <div className="container">
                <div className="subscribe-title text-center">
                    <h2>
                        EXPLORE THE WORLD OF QUIZZES WITH US
                    </h2>
                    <p>
                        QuzzyNet offers you the opportunity to list and share your quizzes with our community. Let your creativity shine as we promote your quizzes to a wider audience of quiz enthusiasts.
                    </p>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="subscription-input-group">
                            <form action="#">
                                {/* <input type="email" className="subscription-input-form" placeholder="Enter your email here" /> */}
                                {/* <button className="appsLand-btn subscribe-btn" onclick="window.location.href='#'">
                                    subscribe
                                </button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}