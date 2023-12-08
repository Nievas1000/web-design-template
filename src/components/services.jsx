import React from 'react';
import Slider from 'react-slick';
import { carousetSettings } from '../utils/carouselSettings';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Services = (props) => {

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
          Discover a spectrum of tailored services that redefine digital excellence. From cutting-edge web development to seamless user experiences, our solutions empower businesses for success in today's dynamic digital landscape. Elevate your brand with our innovative and client-centric services, meticulously crafted for optimal impact and growth
          </p>
        </div>
        <Slider {...carousetSettings}>
          { props?.data?.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;