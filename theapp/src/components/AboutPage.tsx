import React from 'react';

const AboutPage: React.FC<{}> = () => {
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">About React</h1>
                <p className="col-md-8 fs-4">This app uses React.</p>
            </div>
        </div>
    );
}

export default AboutPage;