import React from "react";
import ReactDOM from "react-dom";


const normalJSVariable = "Shivam is normal variable";
const jsx1 = (
    <h1>heading one {normalJSVariable}</h1>
);

const jsx2 = <h1>heading two</h1>;

const jsx3 = <h1>heading three {jsx2}</h1>;

const NormalFunctionalComponenet = () => {
    return (
        <>
            <>this is just a normal JS Function returning some jsx</>
            {jsx1}
            {jsx3}
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NormalFunctionalComponenet></NormalFunctionalComponenet>)

