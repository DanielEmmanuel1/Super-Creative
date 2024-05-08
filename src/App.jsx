import { useEffect, useRef, useLayoutEffect, useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const words = useRef();
  let wordArray = ["Team", "Talent", "Agency"];
  let [index, setIndex] = useState(0);

  function displayWord() {
    setIndex((index) => (index + 1) % wordArray.length);
  }

  useLayoutEffect(() => {
    words.current.classList.add("active");
    let x = setInterval(displayWord, 1200);

    return () => {
      clearInterval(x);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-hero-pattern py-8 relative px-[1em]">
        <h1 className="text-[5rem] font-bold lg:w-[50%] text-center">
          The Creative
          <div
            id="agency"
            ref={words}
            className="word-animation relative max-w-fit max-h-fit inline-flex flex-col items-center"
          >
            <span className=""></span>
            <img
              src="/pictures/path.svg"
              alt="path"
              className="absolute bottom-1 -z-10 h-4 w-[250px] ml"
            />
            {wordArray[index]}
          </div>{" "}
          With A Twist
        </h1>

        <p className="md:text-center text-[20px] text-center mb-2">
          Lets reduce the work load for you and help you scale your freelance
          business
        </p>
        <div className="flex">
          <div>
            <img src="./pictures/pic1.png" alt="" />
          </div>
          <div>
            <img src="./pictures/pic2.png" alt="" />
          </div>
          <div>
            <img src="./pictures/pic3.png" alt="" />
          </div>
          <div>
            <img src="./pictures/pic4.png" alt="" />
          </div>
        </div>
        <br />
        <div className="lg:flex-row gap-4 flex flex-col">
          <button className="bg-[#E52424] text-white text-sm py-2 px-4 border rounded-xl">
            Let's Talk
          </button>
          <button className="bg-white text-[#E52424] border-[#E52424] text-sm p-2 border rounded-xl">
            Explore Our Works
          </button>
        </div>
      </div>
      <div className="flex justify-center mb-40">
        <img
          className="w-full absolute top-64 z-[-1]"
          src="./pictures/curve.svg"
          alt=""
        />
      </div>

      <div className="lg:flex-row justify-center gap-6 lg:w-full h-[800px] border-2 border-red-600 w-[80%] mx-auto flex flex-col">
        <div className="relative w-[30%]; h-[70%]">
          <img
            className="h-full w-full object-cover"
            src="pictures/guy.png"
            alt=""
          />
          <div className="lg:flex items-center justify-between bg-[rgba(0,0,0,0.4)] absolute bottom-3 border rounded-xl border-none lg:px-2 py-2 lg:left-[3.4%] lg:w-[35rem] w-[15rem] h-[5rem] left-[2%] flex">
            <div>
              <h2 className="font-bold lg:text-xl text-white text-sm">
                Streamline Your Workload
              </h2>
              <p className="text-white lg:text-[12px] lg:w-[80%] text-[8px]">
                Optimize your workflow with our platform's seamless outsourcing
                solutions.
              </p>
            </div>
            <img className="" src="./pictures/Arc.svg" alt="" />
          </div>
        </div>

        <div className="relative w-[30%]; h-[70%]">
          <img
            className="h-full w-full object-cover"
            src="pictures/girl.png"
            alt=""
          />
          <div className="lg:flex-row justify-between bg-[rgba(0,0,0,0.4)] absolute bottom-3 lg:rounded-xl px-2 py-2 lg:left-[3.4%] lg:w-[50rem] w-[15rem] h-[5rem] left-[2%] flex">
            <div>
              <h2 className="font-bold lg:text-xl text-white text-xs">
                Tap into our pool of talented Designers
              </h2>
              <p className="text-white lg:text-[12px] lg:w-[75%] text-[8px]">
                a diverse pool of talented creatives ready to tackle your
                projects, allowing you to focus on what matters most
              </p>
            </div>
            <img src="./pictures/Arc.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="lg:flex-row justify-center lg:gap-64 items-center flex flex-col gap-20">
        <div>
          <img
            className="w-[300px]"
            src="./pictures/keepscrolling.svg"
            alt=""
          />
        </div>
        <div className="lg:w-[30%] flex flex-col w-[95%]">
          <div className="text-4xl">Who are we?</div>

          <div className="flex gap-3 py-6">
            <button className="bg-[#E52424] px-4 py-3 border rounded-3xl text-white text-[12px]">
              About WMMW
            </button>
            <img className="w-[3rem]" src="./pictures/Arrowup.svg" alt="" />
          </div>
          <p className="text-lg">
            An independent creative web design and branding agency aiding
            overwhelmed creatives in outsourcing their workload to fellow
            professionals. Let’s aim for the top together!
          </p>
        </div>
      </div>

      <div className="lg:flex justify-center lg:gap-56 w-[95%] lg:mx-16  mt-48 mb-56 flex-row mx-auto px-2">
        <div className="flex gap-3 flex-col">
          <h1 className="text-[1.5rem] font-semibold">Our Services</h1>
          <p className="lg:font-bold text-[24px] w-[296px] text-lg font-semibold mb-8">
            We bring our passion for good design to brave brands and deliver
            something you can shout about.
          </p>
        </div>

        <div className="lg:w-[50%] flex flex-col w-[95%]">
          <p className="py-6 border-b-2 border-t-2 border-black-400">
            01 Identity Design
          </p>
          <p className="py-6 border-b-2 border-black-400">02 UI/UX Design</p>
          <p className="py-6 border-b-2 border-black-400">
            03 Website Development
          </p>
          <p className="py-6 border-b-2 border-black-400">
            {" "}
            04 App Development
          </p>
        </div>
      </div>

      <div className="w-[100%] mx-auto flex flex-col justify-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="h-2 w-2 bg-[#E52424] border rounded-full"></div>
          <p className="text-[24px]">Our Works</p>
        </div>
        <div className="lg:w-[100%] flex flex-wrap lg:mb-32 gap-10 lg:justify-center w-[80%] mx-auto mb-16">
          <div className="">
            <img
              className="w-full h-auto"
              src="./pictures/Frame01.png"
              alt=""
            />
            <div className="flex items-center gap-1 py-2">
              <div className="h-2 w-2 border rounded-full bg-[#E52424]"></div>
              <p className="lg:text-lg text-sm">2024</p>
            </div>
            <p className="lg:text-lg text-sm">Crypto & Nft Wallet || UI Exploration</p>
          </div>
          <div className="">
            <img
              className="w-full h-auto"
              src="./pictures/Frame02.png"
              alt=""
            />
            <div className="flex items-center gap-1 py-2">
              <div className="h-2 w-2 border rounded-full bg-[#E52424]"></div>
              <p className="lg:text-lg text-sm">2024</p>
            </div>
            <p className="lg:text-lg text-sm">Crypto & Nft Wallet || UI Exploration</p>
          </div>
          <div className="">
            <img
              className="w-full h-auto"
              src="./pictures/Frame03.png"
              alt=""
            />
            <div className="flex items-center gap-1 py-2">
              <div className="h-2 w-2 border rounded-full bg-[#E52424]"></div>
              <p className="lg:text-lg text-sm">2024</p>
            </div>
            <p className="lg:text-lg text-sm">Crypto & Nft Wallet || UI Exploration</p>
          </div>
          <div className="">
            <img
              className="w-full h-auto"
              src="./pictures/Frame04.png"
              alt=""
            />
            <div className="flex items-center gap-1 py-2">
              <div className="h-2 w-2 border rounded-full bg-[#E52424]"></div>
              <p className="lg:text-lg text-sm">2024</p>
            </div>
            <p className="lg:text-lg text-sm">Crypto & Nft Wallet || UI Exploration</p>
          </div>
        </div>

        <div className="w-full flex justify-center mb-32">
          <button className="border-[1.5px] px-2 border-[#E52424] rounded-lg py-1">
            View More
          </button>
        </div>

        <div className="lg:flex lg:justify-center gap-64 bg-[#E52424] text-white py-32 rounded-t-3xl lg:w-full w-[95%] px-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 pb-3">
              <div className="h-2 w-2 border rounded-full bg-[#E52424]"></div>
              <p className="lg:text-[24px] text-lg font-semibold">What Professionals are saying</p>
            </div>
            <p className="lg:text-[16px] w-[369px] text-sm px-4 mb-8">
              We supply clients across the entire globe with improved network
              connections.
            </p>
          </div>

          <blockquote>
            <div className="lg:flex flex-col mx-auto">
              <img 
                className="lg:w-[15px] pb-8 w-[1rem]"
                src="./pictures/quote.svg"
                alt=""
              />
              <p className="lg:w-[733px] text-[24px] lg:font-medium border-b-2 border-white pb-8 mb-8 text-sm font-light ">
                WWM focuses on the end-user and helps improve retention. They
                excel in user experience and big-picture thinking.
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-4">
                <img src="./pictures/david.png" alt="" />
                <div>
                  <p>David Emulo</p>
                  <p>Founder KDMedia</p>
                </div>
              </div>
              <div className="flex gap-2">
                <img src="./pictures/button2.svg" alt="" />
                <img src="./pictures/button1.svg" alt="" />
              </div>
            </div>
          </blockquote>
        </div>

        {/* <div className="h-[502px] flex flex-col gap-2  justify-center">
          <div className="flex items-center gap-2 mx-32">
            <div className="h-2 w-2 border rounded-full bg-[#E52424]"></div>
            <p>FAQ</p>
          </div>
          <div className="h-2 w-2 border rounded-full"></div>
          <div className="flex justify-center gap-8 h-[80%] items-center mx-32">
            <div className="flex flex-col w-full">
              <div className="">
                <p className="border-b-1 border-t-2 flex justify-between items-center py-3">
                  Why should I use WWM{" "}
                  <span className="text-[2.5rem] text-[#E52424]">+</span>
                </p>
              </div>
              <div className="">
                <p className="border-b-1 border-t-2 flex justify-between items-center py-3">
                  Why should I use WWM{" "}
                  <span className="text-[2.5rem] text-[#E52424]">+</span>
                </p>
              </div>
              <div className="">
                <p className="border-b-2 border-t-2 flex justify-between items-center py-3">
                  Why should I use{" "}
                  <span className="text-[2.5rem] text-[#E52424]">+</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="">
                <p className="border-b-1 border-t-2 flex justify-between items-center py-3">
                  Why should I use WWM{" "}
                  <span className="text-[2.5rem] text-[#E52424]">+</span>
                </p>
              </div>
              <div className="">
                <p className="border-b-1 border-t-2 flex justify-between items-center py-3">
                  Why should I use WWM{" "}
                  <span className="text-[2.5rem] text-[#E52424]">+</span>
                </p>
              </div>
              <div className="">
                <p className="border-b-2 border-t-2 flex justify-between items-center py-3">
                  Why should I use WWM{" "}
                  <span className="text-[2.5rem] text-[#E52424]">+</span>
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="h-[540px] relative overflow-hidden">
          <div className="border rounded-3xl h-[380px] mx-32 flex justify-end relative">
            <img
              src="./pictures/team.png"
              alt=""
              className="w-[65%] h-auto object-cover z-10 border rounded-3xl"
            />
            <div className="flex absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent to-65% to-black z-20 border rounded-3xl">
              <div className="flex flex-col justify-center ml-9 gap-6">
                <span className="text-white w-[339px]">
                  Come work with our amazing team as we make wealth accessible
                  to both the current and upcoming generations.
                </span>

                <a className="bg-[#E52424] text-white w-fit p-2 rounded-md">
                  Join the team
                </a>
              </div>
            </div>
          </div>
        </div> */}

          {/* <div className="h-[278px] max-w-max overflow-hidden flex flex-col gap-8">
            <div className="w-[180%] flex gap-20 slide-animation">
              <span className="text-[40px] font-semibold leading-[49.2px] ">
                Let’s Work Together.
              </span>
              <span className="text-[40px] font-semibold leading-[49.2px] ">
                Let’s Work Together.
              </span>
              <span className="text-[40px] font-semibold leading-[49.2px] ">
                Let’s Work Together.
              </span>
              <span className="text-[40px] font-semibold leading-[49.2px] ">
                Let’s Work Together.
              </span>
              <span className="text-[40px] font-semibold leading-[49.2px] ">
                Let’s Work Together.
              </span>
            </div>
            <div className="w-[180%] flex gap-10 ml-[-40px] slide-animation2">
              <span className="text-[40px] font-semibold leading-[49.2px] 2">
                Let’s Work Together.
              </span>
              <span className="text-[40px] font-semibold leading-[49.2px] 2">
                Let’s Work Together.
              </span>
              <span className="text-[40px] font-semibold leading-[49.2px] 2">
                Let’s Work Together.
              </span>
              <span className="text-[40px] font-semibold leading-[49.2px] 2">
                Let’s Work Together.
              </span>
              <span className="text-[40px] font-semibold leading-[49.2px] 2">
                Let’s Work Together.
              </span>
            </div>
          </div> */}
      </div>

      {/* <div className="h-[379px] bg-[#1C1C1C] text-white flex justify-center items-center">
        <div className="mx-32 w-full">
          <div>
            <div>
              <h3>LOGO</h3>
            </div>
            <div className="flex justify-between mb-8 items-center">
              <div>
                <span>Lets Work Together!</span>
              </div>
              <div className="flex gap-3">
                <div className="border-2 p-2 rounded-r-3xl rounded-l-3xl flex gap-3 items-center">
                  <img className="h-4" src="./pictures/phone.png" alt="" />
                  <span>+2348080063682</span>
                </div>
                <div className="border-2 p-2 rounded-r-3xl rounded-l-3xl flex gap-3 items-center">
                  <img className="h-4" src="./pictures/mail.png" alt="" />
                  <span>oluwadamilare_daniel@outlook.com</span>
                </div>
              </div>
            </div>
            <hr />
          </div>

          <div className="flex justify-between items-center mt-8">
            <div className="flex gap-3">
              <img src="./pictures/whatsapp.png" alt="" />
              <img src="./pictures/twitter.png" alt="" />
              <img src="./pictures/instagram.png" alt="" />
              <img src="./pictures/youtube.png" alt="" />
            </div>

            <div className="flex gap-5">
              <img className="h-6" src="./pictures/copy.png" alt="" />
              <span className="w-[242px]">2024 WWM. all Right Reserved </span>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default App;
