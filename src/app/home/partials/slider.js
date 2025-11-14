"use client";
import Marquee from "react-fast-marquee";

export default function Slider() {
  return (
    <>
      <section className="pt-5">
        <Marquee speed={40} gradient={false} pauseOnHover={true} autoFill={true}>
          <div className="slide">
            <div className="marquee-wrapper">
                <img src="assets/slider/nextjs1.png" width={100}  alt="" />
            </div>
          </div>
          <div className="slide">
            <div className="marquee-wrapper">
                <img src="assets/slider/nextjs1.png" width={100}  alt="" />
            </div>
          </div>
          <div className="slide">
            <div className="marquee-wrapper">
                <img src="assets/slider/react1.png" width={100}  alt="" />
            </div>
          </div>
          <div className="slide">
            <div className="marquee-wrapper">
                <img src="assets/slider/python1.png" width={100}  alt="" />
            </div>
          </div>
          <div className="slide">
            <div className="marquee-wrapper">
                <img src="assets/slider/laravel1.png" width={100}  alt="" />
            </div>
          </div>
          <div className="slide">
            <div className="marquee-wrapper">
                <img src="assets/slider/axios1.png" width={100}  alt="" />
            </div>
          </div>
          <div className="slide">
            <div className="marquee-wrapper">
                <img src="assets/slider/vuejs1.png" width={100}  alt="" />
            </div>
          </div>
          <div className="slide">
            <div className="marquee-wrapper">
                <img src="assets/slider/jquerry1.png" width={100}  alt="" />
            </div>
          </div>
          <div className="slide">
            <div className="marquee-wrapper">
                <img src="assets/slider/tailwindcss1.png" width={100}  alt="" />
            </div>
          </div>
          <div className="slide">
            <div className="marquee-wrapper">
                <img src="assets/slider/materialui1.png" width={100}  alt="" />
            </div>
          </div>
          
        </Marquee>
      </section>
    </>
  );
}
