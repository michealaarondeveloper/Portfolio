import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const initialFormData = {
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData,"eee");
    try {
      const response = await emailjs.send(
        'service_3n6ko1w', 
        'template_0pkowlq',
        formData,
        'F3tLOcqb7hDC1OfI3'
      );
  
      console.log('Email sent:', response);
      setFormData(initialFormData);
      toast.success('Message sent successfully!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        
        <ToastContainer />
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Micheal Aaron</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for full-time positions. Contact me and
                  let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/micheal-aaron-173188246/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/michealaarondeveloper"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>

                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <Link
                    target="_blank"
                    href="https://flowcv.com/resume/aoa5c0jan2"
                  >
                    <a>
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                onSubmit={handleSubmit}
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name *</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number *
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email *</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message *</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                className="w-full p-4 text-gray-100 mt-4"
                disabled={!formData.name || !formData.email || !formData.message || !formData.phone}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#5651e5]"
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
