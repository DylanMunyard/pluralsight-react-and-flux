import React from 'react';

const HomePage: React.FC<{}> = () => {
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Pluralsight Administration</h1>
                <p className="col-md-8 fs-4">React, Flux, and React Router for ultra-response web appps.</p>
            </div>
        </div>
    );
}

export default HomePage;