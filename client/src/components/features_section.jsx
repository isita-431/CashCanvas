/* eslint-disable react/prop-types */
import React from 'react';
import { CustomH1 } from './main/custom_h1_component/custom_h1';
import { Container } from './main/features_styles';

const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <Container>
        {/* <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div> */}
        <CustomH1 data="Features"></CustomH1>
        <div className="row">
          {props.data
            ? // eslint-disable-next-line react/prop-types
              props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {/* <i class={d.icon}></i> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={`bi bi-chat-dots`}
                    viewBox="0 0 16 16"
                  ></svg>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </Container>
    </div>
  );
};

export default Features;
