import { About } from './About'
import { Services } from './Services'
import { Contuct } from './Contuct'
import img from '../../images/left-image.png'
export const Home = () => {
    return (
        <div className="container  " style={{ marginTop: "100px" }}>
            <div>
                <div className="row text-center">
                    <div className="col-6 " style={{ marginTop: "79px" }}>
                        <h1>Welcome Our Website</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nam doloremque perferendis deleniti temporibus minima corrupti illo numquam amet fuga.</p>
                        <button className='btn btn-primary mt-3 m-3'>Read More</button>
                    </div>
                    <div className="col-6 ">
                        <img src={img} alt='' width="100%" />
                    </div>
                </div>
            </div>
            <div >
                <About />
            </div>
            <div>
                <Services />
            </div>
            <div>
                <Contuct />
            </div>
        </div>
    )
}