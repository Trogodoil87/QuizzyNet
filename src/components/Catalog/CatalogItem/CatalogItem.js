
export const CatalogItem = () => {
    return (
        <div className="col-md-4 col-sm-6">
            <div className="single-blog-item">
                <div className="single-blog-item-img">
                    <img src="assets/images/blog/b1.jpg" alt="blog image" />
                </div>
                <div className="single-blog-item-txt">
                    <h1>HTML</h1>
                    <h2 ><a className="single-blog-item-link" href="#">Begin Quizz</a>  <a className="single-blog-item-link" href="#">Edit</a>  <a className="single-blog-item-link" href="#">Delete</a></h2>
                    <h4>posted <span>by</span> <a href="#">admin</a>Level: <span>Beginner</span></h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.
                    </p>
                </div>
            </div>
        </div >
    );
}