import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <header id="header-top" className="header-top">
                <ul>
                    <li>
                        <div className="header-top-left">
                            <ul>
                                <li className="select-opt">
                                    <select name="language" id="language">
                                        <option value="default">EN</option>
                                        <option value="BG">BG</option>
                                    </select>
                                </li>
                                <li className="select-opt">
                                    <a href="#"><span className="lnr lnr-magnifier"></span></a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="head-responsive-right pull-right">
                        <div className="header-top-right">
                            <ul>
                                <li className="header-top-contact">
                                    +1 222 777 6565
                                </li>
                                <li className="header-top-contact scroll">
                                    <a href="#">sign in</a>
                                </li>
                                <li className="header-top-contact scroll">
                                    <a href="#">register</a>
                                </li>
                                <li className="header-top-contact scroll">
                                    <a href="#">logout</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>

            </header>

            <section className="top-area">
                <div className="header-area">

                    <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

                        <div className="container">

                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                    <i className="fa fa-bars"></i>
                                </button>
                                <a className="navbar-brand" href="index.html">Quizzy<span>Net</span></a>

                            </div>

                            <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                                <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                    <li className="scroll"><a href="#home">home</a></li>
                                    <li className="scroll"><a href="#reviews">catalog</a></li>
                                    <li className="scroll"><a href="#reviews">create</a></li>
                                    <li className="scroll"><a href="#reviews">my quizzes</a></li>
                                    <li className="scroll"><a href="#reviews">my account</a></li>
                                    <li className="scroll"><a href="#reviews">about us</a></li>
                                    <li className="scroll"><a href="#reviews">subscribe</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="clearfix"></div>
            </section>
        </>


    );
}