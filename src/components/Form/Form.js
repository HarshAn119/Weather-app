import React from "react";
import './Form.css';

const Form = ({ showWeather, error }) => {
    return (
        <div>
            <div>{error ?isError():null}</div>
            <div class="pa2 black-80">
                <form 
                    className="measure cen"
                    onSubmit={showWeather}
                    >
                    <input id="name" className="input-reset ba br4 b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" placeholder="Enter City" />
                    <button className='f6 grow no-underline br-pill mb2 dib white bg-blue buttn'>Get Weather</button>
                </form>
            </div>
        </div>
    );
}

function isError(){
    return(
        <p class="w-90 ba br2 pa3 ma2 red bg-washed-red" role="alert">
            <strong>Oh snap!</strong> Wrong entry detected
        </p>
    );
}

export default Form;