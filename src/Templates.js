import React from 'react';
import './Templates.css';

function Templates({ title, image_1, image_2, image_3, image_4, image_5 }) {
  return (
    <div className="templates">
      <h1>{title}</h1>
      <ul>
        <li className="template">
          <div className="template__image-wrapper">
            <img src={image_1} alt="" className="template__image" />
          </div>
        </li>
        <li className="template">
          <div className="template__image-wrapper">
            <img src={image_2} alt="" className="template__image" />
          </div>
        </li>
        <li className="template">
          <div className="template__image-wrapper">
            <img src={image_3} alt="" className="template__image" />
          </div>
        </li>
        <li className="template">
          <div className="template__image-wrapper">
            <img src={image_4} alt="" className="template__image" />
          </div>
        </li>
        <li className="template">
          <div className="template__image-wrapper">
            <img src={image_5} alt="" className="template__image" />
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Templates
