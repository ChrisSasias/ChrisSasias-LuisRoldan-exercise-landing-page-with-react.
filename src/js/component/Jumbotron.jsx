import React from "react";

const Jumbotron = () => {
    return (
        <div className="bg-light p-5 rounded">
            <h1 className="display-3 font-welcome">A Warm Welcome!</h1>
            <p className="lead text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus laborum veritatis atque aut debitis. Consequatur magni, laborum adipisci, eum odio ratione quaerat quis, officiis accusantium rerum asperiores harum eaque expedita.
            </p>
            <a className="btn btn-lg btn-primary"
                href="/docs/5.0/components/navbar/"
                role="button"
            >
                Call to action!
            </a>
        </div>
    );
};

export default Jumbotron;