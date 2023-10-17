import { configureStore } from '@reduxjs/toolkit';
import stories from './Components/StoryCard';
import Chart from './Components/Chart';
import { ArrowUp } from 'react-feather';
import { SocialIcon } from 'react-social-icons';
import {FaCaretDown} from 'react-icons/fa';import React, { useEffect, useState } from 'react';
import Form from './Components/Form';
import Header from './Components/Header';
import { Provider } from 'react-redux';
import Storyyp from './Components/Storyp';


const store = configureStore({
  reducer: {
    stories: stories,
  },
});

function App() {
  const [isHeaderFixed, setHeaderFixed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const scrollup = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  
  const headerClasses = isHeaderFixed
    ? 'bg-white fixed top-0 w-full z-50 shadow-lg h-20 pt-4'
    : 'bg-white mt-4';

  return (
    <Provider store={store}>
      <div className="min-h-screen">
        <header className={headerClasses}>
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsJ3zziUfsqpHAahfEJcosOmanbZ0MJbXW7VsCbo7C&s" // Replace with your logo image path
                alt="Logo"
                className="w-28"
              />
              <nav className="pl-32">
                <ul className="flex space-x-4">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li className="relative group">
                    <a href="#" className="ml-10 flex">
                      Teams <FaCaretDown className="ml-2 mt-2" />
                    </a>
                    <ul className="hidden absolute left-5 top-8 bg-gray-300 w-40 justify-center text-gray-700 rounded-md space-y-1 group-hover:block">
                      <li className="flex justify-center pt-2">
                        <a href="#">Staff</a>
                      </li>
                      <li className="flex justify-center pt-2">
                        <a href="#">Border Members</a>
                      </li>
                      <li className="flex justify-center pt-2">
                        <a href="#">Advisor/Mentors</a>
                      </li>
                      <li className="flex justify-center p-2">
                        <a href="#">Executives</a>
                      </li>
                      <li className="flex justify-center p-2">
                        <a href="#">Placement</a>
                      </li>
                      <li className="flex justify-center p-2">
                        <a href="#">Groups</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="ml-10">
                      Success Stories
                    </a>
                  </li>
                  <li>
                    <a href="#" className="ml-10">
                      About US
                    </a>
                  </li>
                  <li>
                    <a href="#" className="ml-10">
                      Get Involved
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <button className="ml-10 bg-blue-700 text-white hover:bg-blue-800 px-6 py-2 rounded">
              Donate
            </button>
          </div>
        </header>
        <section className="px-4 py-10 text-center">
          <h1 className="font-extrabold text-5xl mb-5">Success Stories</h1>
          <p className="text-xl mb-5">
            A2SV has turned the dreams of African software engineers into a reality and continues to thrive.
          </p>
          <h5 className="mb-2">Google SWE Interviews Acceptance Rate Comparison</h5>
          <p>A2SV students are 35 times more likely to pass Google SWE interviews than average candidates.</p>
          <Header />
        </section>
        <section className="px-4 py-10 text-center bg-gray-100">
          <h1 className="font-extrabold text-5xl mb-5">Impact Stories</h1>
          <p className="text-xl mb-5">Behind every success is a story. Learn about the stories of A2SVians.</p>
          <Storyyp />
        </section>
        <section className="px-4 py-10 text-center">
          <h1 className="font-extrabold text-2xl mb-5">The Growth of A2sv</h1>
          <Chart />
        </section>
        <div className="p-3 bg-blue-800 text-white text-3xl text-center">
          <h1 className="pt-4">Subscribe to our newsletter!</h1>
          
        </div>
        <div className="p-3 bg-blue-800 text-white ">
           <Form  />
        </div>
        
        <button
          onClick={scrollup}
          className={`${
            isVisible ? 'block' : 'hidden'
          } fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full`}
        >
          <ArrowUp size={38} />
        </button>
        <footer className="bg-white py-4 w-full h-40 text-center">
          <div className="">
            <p className="text-black">Follow us on social media</p>
            <div className="flex justify-center mt-4">
              <a href="https://www.facebook.com/a2svfoundation">
                <SocialIcon url="https://www.facebook.com/a2svfoundation" className="ml-6" />
              </a>
              <a href="https://twitter.com/a2svfoundation">
                <SocialIcon url="https://twitter.com/a2svfoundation" className="ml-6" />
              </a>
              <a href="https://www.instagram.com/a2svfoundation">
                <SocialIcon url="https://www.instagram.com/a2svfoundation" className="ml-6" />
              </a>
              <a href="https://www.linkedin.com/a2svfoundation">
                <SocialIcon url="https://www.linkedin.com/a2svfoundation" className="ml-6" />
              </a>
              <a href="mailto:your@email.com">
                <SocialIcon url="mailto:your@email.com" className="ml-6" />
              </a>
            </div>
            <p className='mt-4'>© Copyright 2023 A2SV Foundation.</p>
          </div>
        </footer>
      </div>
    </Provider>
  );
}

export default App;
