import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
// const $ = require( "jquery" )( window );
import $ from "jquery";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  const [count, setCount] = useState(0);

  const sessionJson = [
    {
      img: "/images/sessions/session1.jpg",
      title: "Sustainable Crop Production",
    },
    {
      img: "/images/sessions/session2.jpg",
      title: "Soil Health and Management",
    },
    {
      img: "/images/sessions/session3.jpg",
      title: "Water Management in Agriculture",
    },
    {
      img: "/images/sessions/session4.jpg",
      title: "Agroecology and Biodiversity",
    },
    {
      img: "/images/sessions/session5.jpg",
      title: "Precision Agriculture",
    },
    {
      img: "/images/sessions/session6.jpg",
      title: "Climate-Smart Agriculture",
    },
    {
      img: "/images/sessions/session7.jpg",
      title: "Sustainable Livestock Management",
    },
    {
      img: "/images/sessions/session8.jpg",
      title: "Agro-industrial Waste Management",
    },
    {
      img: "/images/sessions/session9.jpg",
      title: "Sustainable Agro-business Models",
    },
    {
      img: "/images/sessions/session10.jpg",
      title: "Education and Outreach in Sustainable Agriculture",
    },
    {
      img: "/images/sessions/session11.jpg",
      title: "Sustainable Fisheries and Aquaculture",
    },
    {
      img: "/images/sessions/session12.jpg",
      title: "Urban Agriculture",
    },
    {
      img: "/images/sessions/session13.jpg",
      title: "Agri Business/Agrochemicals and Fertilizers for Future",
    },
    {
      img: "/images/sessions/session14.jpg",
      title: " Livestock based Sustainable Food system",
    },
    {
      img: "/images/sessions/session15.jpg",
      title: "Food & National Security",
    },
    {
      img: "/images/sessions/session16.jpg",
      title: "Climate Change Impact and Natural Disaster",
    },
    {
      img: "/images/sessions/session17.jpg",
      title: " Adaptation and Mitigation Strategies",
    },
    {
      img: "/images/sessions/session18.jpg",
      title: "Disaster Risk Management",
    },
    {
      img: "/images/sessions/session19.jpg",
      title: "Innovative Solutions and Technologies",
    },
    {
      img: "/images/sessions/session20.jpg",
      title: "Nutrition and Climate Change",
    },
  ];

  const submissionJson = [
    {
      date: "30",
      month: "Jul",
      day: "Wednesday",
      title: "Early bird registration",
      color: "bg-indigo-500",
    },
    {
      date: "31",
      month: "August",
      day: "Sunday",
      title: "Abstract submission",
      color: "bg-green-500",
    },
    {
      date: "30",
      month: "September",
      day: "Tuesday",
      title: "Full paper submission",
      color: "bg-yellow-500",
    },
    {
      date: "31",
      month: "October",
      day: "Friday",
      title: "Final Registration",
      color: "bg-pink-500",
    },
  ];

  const whyDoJson = [
    {
      title: "Cutting-Edge Research",
      content:
        "Explore groundbreaking advancements in agriculture, food science & technology and climate change.",
    },
    {
      title: "Global Networking",
      content:
        "Connect with international experts, peers and industry leaders.",
    },
    {
      title: "Innovative Sessions",
      content: "Participate in workshops and presentations on emerging trends.",
    },
    {
      title: "Publication Opportunities",
      content:
        "Publish your research in prestigious journals and conference proceedings.",
    },
    {
      title: "Expert Keynotes",
      content: "Gain insights from distinguished speakers and thought leaders.",
    },
    {
      title: "Interactive Workshops",
      content: "Engage in hands-on learning and practical skill development.",
    },
    {
      title: "Collaborative Projects",
      content:
        "Discover potential collaborators for future research and innovation.",
    },
    {
      title: "Professional Development",
      content: "Enhance your career with new knowledge and skills.",
    },
    {
      title: "Student Engagement",
      content:
        "Encourage student participation with special sessions and awards.",
    },
    {
      title: "Research Showcases",
      content: "Present and discuss your research with a global audience.",
    },
    {
      title: "CERADA Awards",
      content:
        "Celebrate excellence with our prestigious awards, recognizing outstanding contributions to the field.",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true, // animate only once
    });
  }, []);
  return (
    <>
      <Navbar />
      <section className="banner" >
        <div className="bg-[url(/images/banner.jpg)] w-fill bg-cover bg-center flex justify-between items-center px-10 py-48" data-aos="fade-up">
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div> */}
          <div>
            <h1 className="text-6xl font-bold text-white text-shadow-lg/30" data-aos="fade-up">
              International Conference on Sustainable Agriculture Practices and
              Climate Change Impacts (ICSAPCI)
            </h1>
            <div className="grid grid-cols-12 gap-4 mt-20">
              <div className="lg:col-span-8 col-span-12 space-y-5 text-white font-bold text-2xl text-shadow-lg/30 ">
                <p data-aos="fade-up">
                  Theme: "Innovative Approaches to Mitigate Climate Change
                  through Sustainable Agriculture"
                </p>
                <p data-aos="fade-up">Hybrid conference: (In Person + Online)</p>
                <p data-aos="fade-up">
                  Organized by: Confworld Educational Research and Development
                  Association
                </p>
              </div>
              <div className="lg:col-span-4 col-span-12">
                <div className="space-y-4 max-w-sm mx-auto">
                  {/* <!-- Date Row --> */}
                  <div className="flex items-center bg-white rounded-full p-3 shadow" data-aos="fade-up">
                    <div className="bg-teal-400 text-white rounded-full p-3">
                      {/* <!-- Calendar Icon (Heroicons example) --> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 7V3M16 7V3M4 11h16M5 21h14a2 2 0 002-2V7a2 
              2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4" data-aos="fade-up">
                      <h4 className="font-bold text-gray-800">Date</h4>
                      <p className="text-sm text-gray-600">
                        16 To 17 Apr, 2026
                      </p>
                    </div>
                  </div>

                  {/* <!-- Location Row --> */}
                  <div className="flex items-center bg-white rounded-full p-3 shadow" data-aos="fade-up">
                    <div className="bg-teal-400 text-white rounded-full p-3">
                      {/* <!-- Location Icon --> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 
              .896-2 2 .896 2 2 2zm0 10s6-4.686 6-10a6 6 
              0 10-12 0c0 5.314 6 10 6 10z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4" data-aos="fade-up">
                      <h4 className="font-bold text-gray-800">Location</h4>
                      <p className="text-sm text-gray-600">
                        City : Manila & Country: Philippines
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal-600 flex justify-center">
        <div className="my-36">
          <div className="grid grid-cols-2 container lg:p-15 py-10 text-white text-shadow-lg/30 gap-10">
            <div className="lg:col-span-1 col-span-2">
              <h2 className="text-4xl font-bold"  data-aos="fade-up">Welcome to ICSAPCI 2026</h2>
              <h3 className="text-xl text-justify font-semibold pt-3 pb-8"  data-aos="fade-up">
                Shaping the Future of Sustainable Agriculture and Climate change{" "}
              </h3>
              <div className=" space-y-10 text-justify font-semibold">
                <p  data-aos="fade-up">
                  Agriculture is the cornerstone of global sustenance and
                  economic stability. In an era where environmental challenges
                  and food security concerns are increasingly prevalent, the
                  need for sustainable agricultural practices has never been
                  more urgent. The International Conference on Sustainable
                  Agriculture Practices and Climate Change Impacts (ICSAPCI -
                  2026) is dedicated to addressing these challenges, focusing on
                  innovative strategies that ensure a sustainable and resilient
                  agricultural future.
                </p>

                <p  data-aos="fade-up">
                  At ICSAPCI-2026 we are dedicated to fostering a collaborative
                  environment where thought leaders, researchers and
                  practitioners from around the globe converge to address the
                  pressing issues of climate change and disaster risk. Our aim
                  is to inspire innovative solutions and build a shared
                  understanding of how to create resilient, sustainable
                  communities in the face of evolving environmental challenges.
                </p>

                <p  data-aos="fade-up">
                  ICSAPCI-2026 brings together leading researchers,
                  practitioners, policymakers and industry experts from around
                  the world to share their insights, research and solutions.
                  This hybrid conference offers the flexibility to join either
                  in person in the vibrant city of Manila, Philippines or
                  virtually from the comfort of your home or office, making it
                  accessible to a global audience.
                </p>
              </div>
            </div>
            <div className="lg:col-span-1 col-span-2"  data-aos="fade-up">
              <img
                src="/images/agriculture-1.jpg"
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="mt-36 grid grid-cols-2 container lg:p-15 py-10 text-white text-shadow-lg/30 gap-10 ">
            <div className="lg:col-span-1 col-span-2 lg:order-1 order-2"  data-aos="fade-up">
              <img
                src="/images/Farming.jpg"
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="lg:col-span-1 col-span-2 flex items-center lg:order-2 order-1" >
              <div>
                <h2 className="text-4xl font-bold"  data-aos="fade-up">Conference Theme</h2>
                <h3 className="text-xl text-justify font-semibold pt-3 pb-8"  data-aos="fade-up">
                  "Innovative Approaches to Mitigate Climate Change through
                  Sustainable Agriculture"
                </h3>
                <div className=" space-y-10 text-justify font-semibold"  data-aos="fade-up">
                  <p>
                    As the world grapples with the challenges of feeding a
                    growing population while preserving our planet, ICSAPCI 2026
                    focuses on innovative solutions and strategic approaches to
                    ensure food security and environmental sustainability. This
                    theme invites participants to explore cutting-edge research,
                    share insights and collaborate on strategies that will shape
                    the future of agriculture. It also reflects our commitment
                    to addressing the urgent need for effective solutions that
                    enhance community resilience in the face of climate change
                    and natural disasters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-center py-16 flex justify-center  ">
        <div className="container">
          {/* <!-- Header --> */}
          <h2 className="text-4xl font-bold text-gray-900 mb-15 underline"  data-aos="fade-up">
            Key Features
          </h2>

          {/* <!-- Features Grid --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 text-shadow-lg/30 font-semibold" >
            {/* <!-- Card --> */}
            <div className="bg-slate-400 rounded-xl p-6 text-white"  data-aos="fade-up">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="font-bold text-lg mb-2">Global Networking</h3>
              <p className="text-md mb-4">
                Connect with a diverse community of experts and peers in the
                field of sustainable agriculture.
              </p>
              {/* <a href="#" className="underline text-md font-semibold">
                LEARN MORE
              </a> */}
            </div>

            {/* <!-- Repeat for other cards (custom colors/icons) --> */}
            <div className="bg-teal-600 rounded-xl p-6 text-white"  data-aos="fade-up">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="font-bold text-lg mb-2">Innovative Insights</h3>
              <p className="text-md mb-4">
                Discover groundbreaking research, technological advancements,
                and best practices that are shaping the future of agriculture.
              </p>
              {/* <a href="#" className="underline text-md font-semibold">
                LEARN MORE
              </a> */}
            </div>

            <div className="bg-slate-400 rounded-xl p-6 text-white"  data-aos="fade-up">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="font-bold text-lg mb-2">Interactive Sessions</h3>
              <p className="text-md mb-4">
                Participate in workshops, panel discussions and Q&A sessions
                with leading minds in the industry.
              </p>
              {/* <a href="#" className="underline text-md font-semibold">
                LEARN MORE
              </a> */}
            </div>

            <div className="bg-teal-600 rounded-xl p-6 text-white"  data-aos="fade-up">
              <div className="text-3xl mb-4">📖</div>
              <h3 className="font-bold text-lg mb-2">
                Publication Opportunities
              </h3>
              <p className="text-md mb-4">
                Present your research and get it published in Scopus-indexed
                journals and Clarivate WoS proceedings.
              </p>
              {/* <a href="#" className="underline text-md font-semibold">
                LEARN MORE
              </a> */}
            </div>

            {/* <!-- Add the second row cards --> */}
            <div className="bg-slate-400 rounded-xl p-6 text-white"  data-aos="fade-up">
              <div className="text-3xl mb-4">🏙️</div>
              <h3 className="font-bold text-lg mb-2">Hybrid Flexibility</h3>
              <p className="text-md mb-4">
                Choose to attend in person or virtually, with full access to all
                conference sessions, materials and networking opportunities.
              </p>
              {/* <a href="#" className="underline text-md font-semibold">
                LEARN MORE
              </a> */}
            </div>

            <div className="bg-teal-600 rounded-xl p-6 text-white"  data-aos="fade-up">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="font-bold text-lg mb-2">CERADA Awards</h3>
              <p className="text-md mb-4">
                Celebrate excellence with our prestigious awards, recognizing
                outstanding contributions to the field.
              </p>
              {/* <a href="#" className="underline text-sm font-semibold">
                LEARN MORE
              </a> */}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal-600 text-center">
        <h2 className="text-4xl font-bold text-white pt-20"  data-aos="fade-up">
          Session and Tracks/Call for Papers Topics{" "}
        </h2>
        <div className="text-lg font-semibold lg:px-32 px-5 py-10 text-white">
          <p className="mb-5"  data-aos="fade-up">
            Our diverse sessions and tracks offer an unparalleled opportunity to
            engage with the global agricultural community, exchange ideas, and
            contribute to sustainable practices that are essential for our
            collective future.
          </p>
          <p  data-aos="fade-up"> 
            We invite researchers, academicians and professionals to submit
            their papers. Topics of interest include, but are not limited to:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-10 pb-32 overflow-hidden">
          {sessionJson.map((ele) => (
            <div
              className="relative  group  w-full h-50 bg-cover bg-center hover:scale-110 hover:z-10 transform transition duration-300 ease-in-out rounded-lg flex justify-center items-center text-white font-bold"
              style={{ backgroundImage: `url(${ele.img})` }}  data-aos="fade-up"
            >
              <div className="absolute inset-0 bg-black opacity-20 transition duration-300 group-hover:opacity-0 flex items-center justify-center rounded-lg"></div>
              <h2 className="text-shadow-lg/30 text-wrap">{ele.title}</h2>
            </div>
          ))}
        </div>
      </section>

      <section className=" text-center py-20">
        <h2 className="text-4xl font-bold underline"  data-aos="fade-up">Submission Deadlines</h2>
        <div className="flex justify-center pt-15">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-32">
            {submissionJson.map((ele) => (
              <div className="rounded-lg shadow-lg overflow-hidden text-center text-sm font-medium"  data-aos="fade-up">
                {/* Top Date Section */}
                <div className={`${ele.color} text-white py-2 `}>
                  <div className="text-sm">{ele.month}</div>
                  <div className="text-2xl font-bold">{ele.date}</div>
                </div>

                {/* Middle Content */}
                <div className="bg-white py-4 px-2">
                  <p className="text-gray-500 text-xs">
                    {ele.day},{" "}
                    <span className="font-semibold">8:00am - 11:30am</span>
                  </p>
                  <p className="text-gray-800 font-bold mt-1">{ele.title}</p>
                </div>

                {/* Bottom Location */}
                <div className={`${ele.color} text-white py-4`}></div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-20 text-gray-400"  data-aos="fade-up">
          For detailed submission guidelines, please visit the{" "}
          <a className="text-teal-600 font-semibold" href="#">
            Submission Page
          </a>
        </p>
      </section>
      <section className="text-center bg-teal-600 p-10 ">
        <h2 className="  text-4xl font-bold text-white underline"  data-aos="fade-up">
          Keynote Speakers
        </h2>
        <p className="text-gray-100 font-semibold text-md mt-5"  data-aos="fade-up">
          Our conference will feature renowned speakers who are leaders in their
          respective fields. Stay tuned for announcements about our
          distinguished keynote speakers.
        </p>
      </section>
      <section className="mt-20">
        <h2 className="font-bold text-4xl  underline text-center"  data-aos="fade-up">
          Why Do You Join Us?
        </h2>
        <p className="text-center italic mt-5 font-bold"  data-aos="fade-up">
          ICSAPCI 2026 CONFERENCE
        </p>
        <div className="flex justify-center  ">
          <div className="container py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {whyDoJson.map((ele) => (
                <div className="group border-2 border-teal-600 rounded-xl p-4 hover:bg-teal-600 hover:scale-110 hover:z-10 transform transition duration-300 ease-in-out"  data-aos="fade-up">
                  <h2 className="text-lg font-bold text-gray-800 group-hover:text-white group-hover:text-shadow-lg/30 ">
                    {ele.title}
                  </h2>
                  <p className="text-gray-500 text-sm mt-1 group-hover:text-white font-semibold group-hover:text-shadow-lg/30">
                    {ele.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <p className="bg-yellow-600 p-5 text-center text-white font-bold"  data-aos="fade-up">
        Note: ICSAPCI-2026 Proceedings will be submitted to the Web of science
        Book citation index (BkCI) and Scopus for evaluation and indexing
        purposes (T&C)* apply.
      </p>

      <footer className="bg-teal-600 mt-20 flex justify-center">
        <div className="">
          <div className=" pt-10 ">
            <img src="/images/logo-icsap.png" alt="" className="w-100"  data-aos="fade-up" />
          </div>
          <p className="text-center text-white font-semibold p-5"  data-aos="fade-up">
            Copyright © 2026 CERADA. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
