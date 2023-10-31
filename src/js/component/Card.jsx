import React from "react";

const Card = () => {
    return (

        <div className="card">
            <img
                src="https://via.placeholder.com/500x325.jpg"
                className="card-img-top img-fluid"
                alt="Imagerelatedtohtml5"
            />
            <div className="card-body">
                <h5 className="card-title text-center">Card title</h5>
                <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. A ut enim quisquam, praesentium ducimus incidunt ipsa atque officiis exercitationem,</p>
                <a href="#" className="btn btn-primary d-flex justify-content-center">Go somewhere</a>
            </div>
        </div>

    );
};

export default Card;





