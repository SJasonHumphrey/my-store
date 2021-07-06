import React from "react";
import NewBass from './../assets/newjpeg.jpeg'
import VintageBass from './../assets/vintage.jpeg'
import './styles.scss'

const Directory = props =>{
    return(
        <div className="directory">
            <div className="wrap">
        <div
        className="item" 
        style={{
            backgroundImage: `url(${NewBass})`
        }}>
        <a href>
            Shop New 
        </a>
        </div>
        <div 
        className="item" 
        style={{
            backgroundImage: `url(${VintageBass})`
        }}>
            <a href>
                Shop Vintage 
            </a>
        </div>
        </div>
        </div>
    );
};

export default Directory;