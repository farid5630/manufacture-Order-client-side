import React from 'react';

const Reviews = () => {
    return (
      <div className="max-w-7xl mx-auto px-12">
        <h4 className="after-custom text-center mt-16 uppercase text-4xl text-cyan-500">
          testimonials
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className='profile'>
              {/* <img
                style={{
                  width: "120px",
                  height: "120px",
                  position: "absolute",
                }}
                className="rounded-full"
                src="https://i.ibb.co/4pRyk89/image.png"
                alt="This is clients imag"
              /> */}
               <img
                
                className="user"
                src="https://i.ibb.co/4pRyk89/image.png"
                alt="This is clients imag"
              />
            </div>
            <div className="text-center tesimonial rounded ">             
              <blockquote>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate, tenetur dolores exercitationem sequi modi est
                accusantium vero dicta fugit. Nisi suscipit, architecto quaerat
                a autem alias fuga temporibus quidem eveniet eius accusantium
                animi accusamus voluptate?
              </blockquote>
              <h2 className="text-2xl text-cyan-500 font-bold">
                Md Foridul Islam
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <img src="" alt="This is clients imag" />
            </div>
            <div>
              <h3>content</h3>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <img src="" alt="This is clients imag" />
            </div>
            <div>
              <h3>content</h3>
              <h3>name</h3>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Reviews;