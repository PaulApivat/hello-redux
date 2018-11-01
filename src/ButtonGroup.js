/* ButtonGroup.js */
import React from 'react';
import { store } from './store';
import { setTechnology } from './actions';

const dispatchBtnAction = e => {
    const tech = e.target.dataset.tech;
    store.dispatch(setTechnology(tech));
}

const ButtonGroup = ({ technologies }) => (
    <div className="hello-btns">
        {technologies.map((tech, i) => (
            <button 
                data-btn={tech}
                key={`btn-${i}`}
                className="hello-btn"
                onClick={dispatchBtnAction}
            >
            {tech}
            </button>
        ))}
    </div>
)

export default ButtonGroup;