import React, { useContext } from "react";
import { myContext } from "../../context/Data";

export default function Testimonial() {
  const { mode } = useContext(myContext);
  return (
    <div>
      <section className="mb-10 text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <h1
            className="text-3xl font-bold text-center text-black "
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Testimonial
          </h1>
          <h2
            className="mb-10 text-2xl font-semibold text-center "
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            What our <span className="text-pink-500 ">customers</span> are
            saying
          </h2>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 mb-6 lg:w-1/3 lg:mb-0">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full"
                  src="https://ecommerce-sk.vercel.app/img/kamal.png"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block w-10 h-1 mt-6 mb-4 bg-pink-500 rounded" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-sm font-medium tracking-wider text-gray-900 uppercase title-font"
                >
                  Kamal Nayan Upadhyay
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  Senior Product Designer
                </p>
              </div>
            </div>
            <div className="p-4 mb-6 lg:w-1/3 lg:mb-0">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full"
                  src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block w-10 h-1 mt-6 mb-4 bg-pink-500 rounded" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-sm font-medium tracking-wider text-gray-900 uppercase title-font"
                >
                  React Js
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  UI Develeoper
                </p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 lg:mb-0">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full"
                  src="https://webknudocs.vercel.app/logo/react.png"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block w-10 h-1 mt-6 mb-4 bg-pink-500 rounded" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-sm font-medium tracking-wider text-gray-900 uppercase title-font"
                >
                  React Js
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  CTO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
