import img from '../../images/footer-bg.png'

export const Contuct = () => {
    return (
        <div className="container " style={{ marginTop: "140px" }}>

            <div className="row text-center bg-light">


                <div className="col-6 bg-dark  " style={{ height: "300px" }} >
                    <input type="text" style={{ width: "90%" }} className="form-control m-4 mt-5 text-center" placeholder="Enter Your E-mail" />
                    <textarea style={{ width: "90%" }} cols={20} className="form-control mt-5 m-4 text-center" placeholder="Write Short comment" />
                    <button className="btn btn-primary">Submit</button>
                </div>
                <div className="col-6">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae iusto doloribus, maiores aspernatur neque eum incidunt iure at nam totam similique ducimus id quo magni. Sint modi ratione sit nulla perspiciatis recusandae commodi! Consequuntur ipsam reprehenderit quos cumque labore autem tempore tempora sint, mollitia saepe quisquam odio. Aliquid, omnis voluptate. Et fugit voluptatem nemo in libero facere corporis porro culpa beatae ullam dolorum quo laborum vero quam, sequi quae totam nihil odio dolorem mollitia voluptatibus optio? Fuga architecto optio consectetur corporis delectus tempore laborum ipsa temporibus sint. Optio id molestias sequi, odio quaerat sit culpa magnam, cum perferendis, in voluptatum.
                </div>














            </div>

            <div className=" text-dark mt-5 bg-light text-center  text-black ">
                <img src={img} alt='' width="100%" />
                <div>
                    <div className="row text-center m-3 "  >
                        <div className="col-4">
                            <h1>About</h1>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, et ut asperiores, reiciendis ad corporis impedit ipsam maxime quia ipsa odio veniam sapiente praesentium assumenda neque, esse a! Perferendis necessitatibus natus distinctio similique? Nihil consequatur aperiam voluptatum, assumenda minima temporibus.
                        </div>
                        <div className="col-4">
                            <h1>Service</h1>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, et ut asperiores, reiciendis ad corporis impedit ipsam maxime quia ipsa odio veniam sapiente praesentium assumenda neque, esse a! Perferendis necessitatibus natus distinctio similique? Nihil consequatur aperiam voluptatum, assumenda minima temporibus.

                        </div>
                        <div className="col-4">
                            <h1>Contuct</h1>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, et ut asperiores, reiciendis ad corporis impedit ipsam maxime quia ipsa odio veniam sapiente praesentium assumenda neque, esse a! Perferendis necessitatibus natus distinctio similique? Nihil consequatur aperiam voluptatum, assumenda minima temporibus.

                        </div>
                    </div>
                </div>
                <div className="text-center p-4">
                    <p>All &copy; Rights Towfik-Primary & Secondary-School <br /> Developer Hubal-Tech </p>
                </div>
            </div>
        </div>

    )
}