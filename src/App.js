import contactus from "../src/images/contactus.jpg";
import about from "../src/images/about.png";
import img1 from "../src/images/img1.png";
import img2 from "../src/images/img2.png";
import img3 from "../src/images/img3.png";
import pa1 from "../src/images/pa1.jpg";
import pa2 from "../src/images/pa2.jpg";
import pa3 from "../src/images/pa3.jpg";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { CiInstagram } from "react-icons/ci";

import { TiHomeOutline } from "react-icons/ti";
import { PiTableThin } from "react-icons/pi";
import { IoShieldCheckmark } from "react-icons/io5";
import { BsFan } from "react-icons/bs";

export default function App() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex left-2 md:py-20 pt-1">
          <div className="bg-white bg-opacity-80 text-[#0b2b3c] p-4 md:p-8 mx-6 md:mx-3 ">
            <p className="text-3xl font-bold md:mb-6">About Us</p>
            <div className="flex gap-2">
              <a href="/Home" className="text-lg ">
                Home
              </a>
              <h1 className="text-bold text-2xl">&#xBB; </h1>
              <a href="/About Us" className="text-lg ">
                About Us
              </a>
            </div>
          </div>
        </div>
        <div className="w-full object-cover">
          <img src={contactus} alt="contactus" className="w-full md:h-auto" />
        </div>
      </div>
      <div className="w-full md:w-full p-2 px-2 py-8 mt-10">
        <div className="flex flex-col sm:flex-row items-center sm:items-start ">
          <div className="w-full md:1/2 ">
            <img src={about} alt="" className="w-full h-auto mb-4" />
          </div>
          <div className="w-full md:1/2 ">
            <div class="flex items-center">
              <div class="bg-white px-3 py-1 md:ml-4 ml-2 border-t-8 border-b-8  border-l-8 border-[#5f3afc]">
                <p className="text-sm md:text-xl md:ml-2 text-[#0b2b3c] font-bold mb-4">
                  ABOUT US
                </p>
              </div>
            </div>
            <p className="text-xl md:text-3xl md:ml-5 text-[#0b2b3c]5f3afc font-bold mb-2 mt-4">
              Architects With Difference & New Approach.
            </p>
            <p className="text-black md:ml-5 my-2 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              eligendi odio perspiciatis alias, enim ut tempora porro sequi fuga
              rem repellat quae distinctio quis temporibus reprehenderit
              repudiandae dolor officiis nisi.
            </p>
            <div className="flex flex-wrap md:flex-nowrap -mx-2">
              <div className="w-full md:w-1/2 px-4 md:py-4 mb-4 md:mb-0">
                <div className="flex items-center">
                  <TiHomeOutline className="text-[#5f3afc] bg-gray-400 rounded-full w-10 h-10 p-2 mr-2" />
                  <div>
                    <h3 className="font-semibold">Smart Home Design</h3>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4 md:py-4 mb-4 md:mb-0">
                <div className="flex items-center">
                  <PiTableThin className="text-[#5f3afc] bg-gray-400 rounded-full w-10 h-10 p-2 mr-2" />
                  <div>
                    <h3 className="font-semibold">Beautiful Scene Around</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap md:flex-nowrap -mx-2">
              <div className="w-full md:w-1/2 px-4 md:py-4 mb-4 md:mb-0">
                <div className="flex items-center">
                  <IoShieldCheckmark className="text-[#5f3afc] bg-gray-400 rounded-full w-10 h-10 p-2 mr-2" />
                  <div>
                    <h3 className="font-semibold">Complete 24/7 Security</h3>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4 md:py-4 mb-4 md:mb-0">
                <div className="flex items-center">
                  <BsFan className="text-[#5f3afc] bg-gray-400 rounded-full w-10 h-10 p-2 mr-2" />
                  <div>
                    <h3 className="font-semibold">Exceptional Lifestyle</h3>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-black md:ml-5 mt-2">
              Morbi porttitor nibh justo, sit amet imperdiet ligula laoreet eu.
              Sed mollis nec sem vel laoreet. Donec tincidunt consequat gravida.
              Nullam accumsan lobortis nisl sed gravida. Aliquam facilisis
              blandit accumsan. Suspendisse elementum sit amet tortor eget
              mollis.
            </p>

            <button
              type="button"
              className="float-left bg-[#0b2b3c] hover:bg-[#5f3afc] mt-10 w-40 px-5 py-5 md:ml-5 text-center right-2 text-white font-bold shadow"
            >
              About Us
            </button>
          </div>
        </div>
      </div>
      {/* OUR SERVICES */}
      <div className="bg-gray-300 relative pb-80 w-full ">
        <div className="flex items-center justify-center">
          <div className="bg-white px-3 py-1 md:ml-4 ml-2 border-t-8 border-b-8  border-l-8 border-[#5f3afc] mt-40 z-10 relative">
            <p className="text-sm md:text-xl md:ml-2 text-[#0b2b3c]  font-bold mb-4 items-center">
              OUR SERVICES
            </p>
          </div>
        </div>
        <p className="text-[#0b2b3c] text-2xl text-center font-bold mt-2 pb-20">
          Our Main Focus
        </p>

        {/* overlay */}
        <div className="relative z-0 pb-40">
          <div className="absolute inset-0 flex flex-wrap md:py-20 bg-gray-300">
            <div className="w-full md:flex md:flex-wrap">
              <div className="md:w-1/3 p-4 md:p-8">
                <div className="bg-white text-center p-4 rounded-lg">
                  <img
                    src={img1}
                    alt="contactus"
                    className="mx-auto mb-4 w-14 md:w-1/3"
                  />
                  <p className="text-xl font-bold md:mb-6 mb-4 text-[#5f3afc]">
                    Buy A Home
                  </p>
                  <p className="text-sm md:mb-6 mb-4">
                    Arose mr rapid in so vexed words. Gay welcome led add to
                    lasting chiefly say to looking for better.
                  </p>
                  <p className="">Get Now &rarr;</p>
                </div>
              </div>
              <div className="md:w-1/3 p-4 md:p-8">
                <div className="bg-white text-center p-4 rounded-lg">
                  <img
                    src={img2}
                    alt="contactus"
                    className="mx-auto mb-4 w-14 md:w-1/3"
                  />
                  <p className="text-xl font-bold md:mb-6 mb-4 text-[#5f3afc]">
                    Sell A Home
                  </p>
                  <p className="text-sm md:mb-6 mb-4">
                    Arose mr rapid in so vexed words. Gay welcome led add to
                    lasting chiefly say to looking for better.
                  </p>
                  <p className="">Get Now &rarr;</p>
                </div>
              </div>
              <div className="md:w-1/3 p-4 md:p-8">
                <div className="bg-white text-center p-4 rounded-lg">
                  <img
                    src={img3}
                    alt="contactus"
                    className="mx-auto mb-4 w-14 md:w-1/3"
                  />
                  <p className="text-xl font-bold md:mb-6 mb-4 text-[#5f3afc]">
                    Rent A Home
                  </p>
                  <p className="text-sm md:mb-6 mb-4">
                    Arose mr rapid in so vexed words. Gay welcome led add to
                    lasting chiefly say to looking for better.
                  </p>
                  <p className="">Get Now &rarr;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Property Agents*/}/
      <div className="flex items-center justify-center pt-40 md-pt-0 md:pt-2">
        <div className="bg-white px-4 py-1 md:ml-4 ml-2 border-t-8 border-b-8  border-l-8 border-[#5f3afc] mt-40 md:mt-0 z-10 relative">
          <p className="text-sm md:text-xl text-[#0b2b3c]  font-bold mb-4 items-center">
            TEAM
          </p>
        </div>
      </div>
      <p className="text-[#0b2b3c] text-2xl text-center font-bold mt-2 pb-20">
        Property Agents
      </p>
      <div className="relative z-0 pb-40">
        <div className="absolute inset-0 flex flex-wrap md:py-20">
          <div className="w-full md:flex md:flex-wrap">
            <div className="md:w-1/3 p-4 md:p-8 relative group">
              <div className="bg-white text-center p-4 rounded-lg relative overflow-hidden">
                <img
                  src={pa1}
                  alt="contactus"
                  className="mx-auto mb-4 w-60 md:w-2/3 rounded-full"
                />
                <p className="text-xl text-[#0b2b3c]  font-bold">
                  A.H John Doe
                </p>
                <p className="">Designer</p>
                <div className="absolute inset-0 my-20 mt-6 mx-12 md:mx-16  bg-[#4c4c4e] bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-gray-900 bg-white p-2 rounded-full hover:bg-[#5f3afc]"
                    >
                      <FaFacebookF className="fab fa-facebook-f" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 bg-white p-2 rounded-full hover:bg-[#5f3afc]"
                    >
                      <TiSocialTwitter className="fab fa-twitter" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 bg-white p-2 rounded-full hover:bg-[#5f3afc]"
                    >
                      <CiInstagram className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4 md:p-8 relative group">
              <div className="bg-white text-center p-4 rounded-lg relative overflow-hidden">
                <img
                  src={pa2}
                  alt="contactus"
                  className="mx-auto mb-4 w-60 md:w-2/3 rounded-full"
                />
                <p className="md:text-xl text-[#0b2b3c]  font-bold">
                  A.H John Doe
                </p>
                <p className="">Designer</p>
                <div className="absolute inset-0 my-20 mt-6 mx-12 md:mx-16 bg-[#4c4c4e] bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-gray-900 bg-white p-2 rounded-full hover:bg-[#5f3afc]"
                    >
                      <FaFacebookF className="fab fa-facebook-f" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 bg-white p-2 rounded-full hover:bg-[#5f3afc]"
                    >
                      <TiSocialTwitter className="fab fa-twitter" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 bg-white p-2 rounded-full hover:bg-[#5f3afc]"
                    >
                      <CiInstagram className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4 md:p-8 relative group">
              <div className="bg-white text-center p-4 rounded-lg relative overflow-hidden">
                <img
                  src={pa3}
                  alt="contactus"
                  className="mx-auto mb-4 w-60 md:w-2/3 rounded-full "
                />
                <p className="md:text-xl text-[#0b2b3c]  font-bold">
                  A.H John Doe
                </p>
                <p className="">Designer</p>
                <div className="absolute inset-0 my-20 mt-6 mx-12 md:mx-16  bg-[#4c4c4e] bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-gray-900 bg-white p-2 rounded-full hover:bg-[#5f3afc]"
                    >
                      <FaFacebookF className="fab fa-facebook-f" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 bg-white p-2 rounded-full hover:bg-[#5f3afc]"
                    >
                      <TiSocialTwitter className="fab fa-twitter" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 bg-white p-2 rounded-full hover:bg-[#5f3afc]"
                    >
                      <CiInstagram className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* OUR AWESOME TESTIMONIAL */}
      {/* <div className="bg-gray-300 relative pb- w-full ">
        <div className="flex items-center justify-center">
          <div className="bg-white px-3 py-1 md:ml-4 ml-2 border-t-8 border-b-8  border-l-8 border-[#5f3afc] mt-40 z-10 relative">
            <p className="text-sm md:text-xl md:ml-2 text-[#0b2b3c]  font-bold mb-4 items-center">
            OUR AWESOME TESTIMONIAL
            </p>
          </div>
        </div>
        <p className="text-[#0b2b3c] text-2xl text-center font-bold mt-2 pb-20">
          Clients Feedback
        </p>
      </div> */}

      
    </>
  );
}
