import React from 'react';
import '../Weather.css';

const Weather = ({ props }) => {
    return(
        <div>
            <div className="center mt3 white">
                <div className="center">
                    <h1 className="f1 mv3">{props.city}</h1>
                    <h1 className="mv2">
                        <i className={`icon fas ${props.icon} `}></i>
                    </h1>
                    <h2 className="mv1 pv1">{props.desc}</h2>
                    {props.temp?<h1 className="mv2 pv1">{props.temp}&deg;</h1>:null}
                    <h3>
                        {props.minT?<span className="ph4">{props.minT}&deg;</span>:null}
                        {props.maxT?<span className="ph4">{props.maxT}&deg;</span>:null}
                    </h3>
                    <h2 className="mv1 pb3">
                        {/* Wind speed */}
                        {props.wind?<span className="ph4"><i className="fas fa-wind pa2"></i>{props.wind}</span>:null}
                        {/* Humidity */}
                        {props.hum?<span className="ph4"><i className="fas fa-temperature-low pa2"></i>{props.hum}</span>:null}
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Weather;