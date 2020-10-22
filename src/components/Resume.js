import React from 'react';
import "./resume.css";

const Resume = () => {
    return ( <div className="resume">

    <div className="resHead">
    <div className="pic"></div>
        <div className="statementContainer">
            <h1>Elijah J. Brown</h1>
            <div className="statement">
                <p>I am a new developer who is eager to learn and grow. I am a recent graduate from  
                    <span><a href="https://devmountain.com"> DevMountain</a></span>, 
                    where I learned full stack web development with React.
                    My talent seems to be in front-end development as I have worked in graphic design previously and am a life-long artist. 
                    I am a prior Marine and have a Associates degree in Culinary Arts. 
                    I worked as a Chef for over 10 years. Now I am transitioning to a new and promising career in tech. 
                    I am very excited to begin this journey and see where it takes me!</p>
            </div>
        </div>
    </div>
    <div className="technologies">
        <div className="icon icon1"></div>
        <div className="icon icon2"></div>
        <div className="icon icon3"></div>
        <div className="icon icon4"></div>
        <div className="icon icon5"></div>
    </div>
    <a href="https://iconscout.com/icons/react" target="_blank">Icons</a> by <a href="https://iconscout.com/contributors/unicons" target="_blank">Unicons Font</a>
    </div> );
}
 
export default Resume;