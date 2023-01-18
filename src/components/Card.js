import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
    return (
        <div className='container my-4'>
            <div className="row mb-2">
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary">World</strong>
                            <h3 className="mb-0">Global Coding</h3>
                            <div className="mb-1 text-muted">Nov 12</div>
                            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/" className="stretched-link">Continue reading</Link>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img className="bd-placeholder-img" width="200" height="250" src="https://source.unsplash.com/200x250/?code,technology,coding" alt=''/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-success">Design</strong>
                            <h3 className="mb-0">Learn Designing</h3>
                            <div className="mb-1 text-muted">Nov 11</div>
                            <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/" className="stretched-link">Continue reading</Link>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                        <img className="bd-placeholder-img" width="200" height="250" src="https://source.unsplash.com/200x250/?graphicart,design" alt=''/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-2">
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary">World</strong>
                            <h3 className="mb-0">Global Coding</h3>
                            <div className="mb-1 text-muted">Nov 12</div>
                            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/" className="stretched-link">Continue reading</Link>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img className="bd-placeholder-img" width="200" height="250" src="https://source.unsplash.com/200x250/?coding,web" alt=''/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-success">Design</strong>
                            <h3 className="mb-0">Learn Designing</h3>
                            <div className="mb-1 text-muted">Nov 11</div>
                            <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/" className="stretched-link">Continue reading</Link>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                        <img className="bd-placeholder-img" width="200" height="250" src="https://source.unsplash.com/200x250/?design" alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card