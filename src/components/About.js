import React from 'react'

const About = () => {
    return (
        <div className='container my-4'>
            <div className="row featurette d-flex justify-content-center align-items-center">
                <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
                    <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                </div>
                <div className="col-md-5">
                <img className="bd-placeholder-img" width="200" height="250" src="https://source.unsplash.com/500x500/?nature" alt=''/>
                </div>
            </div>

            <div className="row featurette d-flex justify-content-center align-items-center">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
                    <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                </div>
                <div className="col-md-5  order-md-1">
                <img className="bd-placeholder-img" width="200" height="250" src="https://source.unsplash.com/500x500/?graphic" alt=''/>
                </div>
            </div>

            <div className="row featurette d-flex justify-content-center align-items-center">
                <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
                    <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                </div>
                <div className="col-md-5">
                <img className="bd-placeholder-img" width="200" height="250" src="https://source.unsplash.com/500x500/?laptop,code" alt=''/>
                </div>
            </div>
        </div>
    )
}

export default About