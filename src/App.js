
import { Catalog } from "./components/Catalog/Catalog";
import { Subscribe } from "./components/Subscribe/Subscribe";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { QuizzyList } from "./components/QuizzyList/QuizzyList";
import { AboutUs } from "./components/AboutUs/AboutUs";


function App() {
    return (
        <>
            <Header />
            {/* <section id="home" className="welcome-hero">
                <div className="container">
                    <div className="welcome-hero-txt">
                        <h2>best place to find and explore that all you need </h2>
                        <p>
                            Find Best Quizzes and practice like never before
                        </p>
                    </div>
                    <div className="welcome-hero-serch-box">
                        <div className="welcome-hero-form">
                            <div className="single-welcome-hero-form">
                                <h3>Quizz?</h3>
                                <form action="index.html">
                                    <input type="text" placeholder="EX: HTML, Java, Css" />
                                </form>
                                <div className="welcome-hero-form-icon">
                                    <i className="flaticon-list-with-dots"></i>
                                </div>
                            </div>
                            <div className="single-welcome-hero-form">
                                <h3>Type?</h3>
                                <form action="index.html">
                                    <input type="text" placeholder="Ex: Hard, Normal, Easy" />
                                </form>
                                <div className="welcome-hero-form-icon">
                                    <i className="flaticon-gps-fixed-indicator"></i>
                                </div>
                            </div>
                        </div>
                        <div className="welcome-hero-serch">
                            <button className="welcome-hero-btn" onclick="window.location.href='#'">
                                search  <i data-feather="search"></i>
                            </button>
                        </div>
                    </div>
                </div>

            </section> */}
{/*     
            <section id="works" className="works">
                <div className="container">
                    <div className="section-header">
                        <h2>how it works</h2>
                        <p>Learn More about how our website works</p>
                    </div>
                    <div className="works-content">
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="single-how-works">
                                    <div className="single-how-works-icon">
                                        <i className="flaticon-lightbulb-idea"></i>
                                    </div>
                                    <h2><a href="#">choose <span> what to</span> do</a></h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.
                                    </p>
                                    <button className="welcome-hero-btn how-work-btn" onclick="window.location.href='#'">
                                        read more
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="single-how-works">
                                    <div className="single-how-works-icon">
                                        <i className="flaticon-networking"></i>
                                    </div>
                                    <h2><a href="#">find <span> what you want</span></a></h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.
                                    </p>
                                    <button className="welcome-hero-btn how-work-btn" onclick="window.location.href='#'">
                                        read more
                                    </button>
                                </div>
                            </div>
                            
                            <div className="col-md-4 col-sm-6">
                                <div className="single-how-works">
                                    <div className="single-how-works-icon">
                                        <i className="flaticon-location-on-road"></i>
                                    </div>
                                    <h2><a href="#">explore <span> amazing</span> place</a></h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.
                                    </p>
                                    <button className="welcome-hero-btn how-work-btn" onclick="window.location.href='#'">
                                        read more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section> */}
            <AboutUs />
            {/* <Subscribe /> */}
            {/* <Catalog /> */}
            <Footer />
        </>
    );
}

export default App;
