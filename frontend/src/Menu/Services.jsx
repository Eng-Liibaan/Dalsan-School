import img1 from '../../images/post-1.jpg'
import img2 from '../../images/post-2.jpg'
import img3 from '../../images/post-3.jpg'
import img4 from '../../images/post-4.jpg'

export const Services = () => {
    return (
        <div style={{ marginTop: "140px" }}>
            <h1 className='text-center'> Our Services</h1>
            <div className="row text-center mt-5">
                <div className="col-4">
                    <div className="card">
                        <div className="card-title">
                        </div>
                        <div className="col-body" style={{ border: "5%" }}>
                            <div className="card-image">
                                <img src={img1} alt='' width="100%" height="300px" />
                                <div className="card-title">
                                    <h1>Accounting</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ipsam.</p>
                                    <button className='btn btn-danger'>More Read</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card-title">
                        </div>
                        <div className="col-body" style={{ border: "5%" }}>
                            <div className="card-image">
                                <img src={img2} alt='' width="100%" height="300px" />
                                <div className="card-title">
                                    <h1>Consulting</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ipsam.</p>
                                    <button className='btn btn-danger'>More Read</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card-title">
                        </div>
                        <div className="col-body" style={{ border: "5%" }}>
                            <div className="card-image">
                                <img src={img3} alt='' width="100%" height="300px" />
                                <div className="card-title">
                                    <h1>Digital Marketing</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ipsam.</p>
                                    <button className='btn btn-danger'>More Read</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}