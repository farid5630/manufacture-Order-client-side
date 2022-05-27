import React from 'react';

const ContactUs = () => {
    return (
      <div className="my-10 ">
        <h3 className="uppercase  text-center text-cyan-500 font-bold text-3xl">
          contact Us
        </h3>
        <p className="text-center after-custom">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          eligendi optio error nisi ea temporibus, ad in dolore corporis atque.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  5630 Tabakpur, <br /> Ulipur, <br /> Kurigram
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon"></div>
              <div className="text">
                <h3>Phone</h3>
                <p>01762-880051</p>
              </div>
            </div>
            <div className="box">
              <div className="icon"></div>
              <div className="text">
                <h3>Email</h3>
                <p>mdforidulislam5630@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ContactUs;