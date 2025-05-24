import CustomButton from "@/components/button";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <div className="flex justify-around mt-20 px-20">
        <div className="left-section">
          <div className="text-5xl font-black">Contact Us</div>
          <p className="text-sm pt-10 w-96">
            We are passionate about partnering with businesses to drive real
            growth that makes a tangible impact.
          </p>
          <div className="flex mt-10">
            <FiPhone className="text-yellow-500 text-4xl w-[25px] " />
            <div className="text-sm pt-2 pl-4">+92 348 8369640</div>
          </div>
          <div className="flex mt-3">
            <FiMail className="text-yellow-500 text-2xl w-[25px]" />
            <div className="text-sm pt-1 pl-4">contact@marketingshore.net</div>
          </div>

          <div className="mt-52">
            <div className="text-5xl font-black">Visit Our Office</div>
            <p className="text-sm pt-10 w-72">
              We welcome NDA submission to our team prior to campaign
              commencement as required.
            </p>
            <CustomButton text="See More" classes="py-2 px-6 mt-10" />
          </div>
        </div>
        <div className="right-section">
          <div className="text-5xl font-black">Request a Quote</div>
          <p className="text-sm pt-10 w-96">
            Contact us today and one of our friendly team members will be
            in-touch within 24 hours.
          </p>

          <form action="#" className="my-10">
            <div className="flex space-x-10">
              <div>
                <label htmlFor="first-name" className="text-xs font-bold">
                  Full Name
                </label>
                <input
                  type="text"
                  className=" border-black border-1 py-1 px-4 mt-2 shadow-md rounded-full block "
                />
              </div>
              <div>
                <label htmlFor="first-name" className="text-xs font-bold">
                  Buisness Name
                </label>
                <input
                  type="text"
                  className=" border-black border-1  py-1 px-4 mt-2 shadow-md rounded-full block "
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="first-name" className="text-xs font-bold">
                Email Address
              </label>
              <input
                type="text"
                className=" border-black border-1  py-1 w-[570px] mt-2 shadow-md rounded-full block "
              />
            </div>

            <div className="mt-4">
              <label htmlFor="first-name" className="text-xs font-bold">
                Contact Number
              </label>
              <input
                type="text"
                className=" border-black border-1  py-1 w-[570px] mt-2 shadow-md rounded-full block "
              />
            </div>

            <div className="flex space-x-10 mt-4">
              <div>
                <label htmlFor="first-name" className="text-xs font-bold">
                  Service
                </label>
                <input
                  type="text"
                  className=" border-black border-1 py-1 px-4 mt-2 shadow-md rounded-full block "
                />
              </div>
              <div>
                <label htmlFor="first-name" className="text-xs font-bold">
                  Budget(Monthly)
                </label>
                <input
                  type="text"
                  className=" border-black border-1  py-1 px-4 mt-2 shadow-md rounded-full block "
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="first-name" className="text-xs font-bold">
                Message
              </label>
              <textarea
                type=""
                className=" border-black border-1  py-1 px-4 mt-2 w-[570px] h-20 shadow-md rounded-lg block "
              />
            </div>
          </form>

          <CustomButton text="See More" classes="py-2 px-6 " />
        </div>
      </div>

      <div className="mt-28 ">
        <div className="text-5xl font-black ml-36">Visit Our Office</div>

        <div className="w-full h-[600] flex justify-center mt-20 rounded-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14159906.420505691!2d58.3546319874604!3d29.950436907162743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1748099442471!5m2!1sen!2s"
            width="70%"
            height="100%"
            style={{ border: 0, 
              borderRadius:50,
              
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
