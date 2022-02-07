import React from 'react';
import {Link} from "react-router-dom";

const NotFound: React.FC<{}> = () => {
    return (
        <div className="p-5 mb-4 bg-light rounded-3 alert alert-danger">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Oh Oh</h1>
                <p className="col-md-8 fs-4">Page not found.</p>
                <Link to="/">Back home</Link>
            </div>
        </div>
    );
}

export default NotFound;