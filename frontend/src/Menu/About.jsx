import img from '../../images/about.jpg'
export const About = () => {
    return (
        <div className="text-center container " style={{ marginTop: "140px" }}>
            <h1>About</h1>
            <div className="row mt-5">
                <div className="col-6">
                    <img src={img} alt='' width="100%" />
                </div>
                <div className="col-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ad debitis fuga neque perferendis, voluptates, quis a commodi eveniet repudiandae quasi. Tenetur quod porro pariatur repudiandae sit vel blanditiis in rem mollitia saepe deserunt quis, velit aliquid minus fugiat accusamus animi tempore, nisi nemo. Expedita rem unde laboriosam tempore quasi minima nulla dolorum deleniti eligendi voluptatum libero, voluptas, sequi consequuntur ab sed, modi autem? Fugiat veniam inventore perspiciatis. Dolore sunt sed illo vero et, aliquam itaque error nostrum vel perferendis ipsum iure hic nisi a adipisci? Libero sunt consequatur porro sapiente, aspernatur, nobis molestiae itaque distinctio enim quas, nemo unde.
                    <button className="btn btn-success mt-4">Read More</button>
                </div>
            </div>
        </div>
    )
}