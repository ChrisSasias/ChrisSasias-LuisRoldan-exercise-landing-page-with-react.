import React from "react";

//create your first component
const Card = () => {
    return (
        <div className="card" style={{ width: "18 rem" }}>
            <img
                src="https://via.placeholder.com/500x325.jpg"
                className="card-img-top card-img-custom"
                alt="Imagerelatedtohtml5"
            />
            <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">Card title</h5>
                <p className="card-text"><div className="d-flex j">Lorem ipsum dolor sit amet consectetur adipisicing elit. A ut enim quisquam, praesentium ducimus incidunt ipsa atque officiis exercitationem,</div></p>
                <a href="#" className="btn btn-primary d-flex justify-content-center ">Go somewhere</a>
            </div>
        </div>
    );
};

export default Card;




