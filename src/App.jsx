import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-hero-pattern py-8 relative">
        <h1 className="text-[5rem] font-bold w-[50%] text-center">
          The Creative Agency With A Twist
        </h1>
        <p className="text-center">
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
        <div className="flex gap-4">
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

      <div className="flex justify-center gap-6">
        <div className="h-[25rem] w-[30rem] relative">
          <img className="h-full w-full" src="pictures/guy.png" alt="" />
          <div className="flex bg-[rgba(0,0,0,0.4)] absolute bottom-3 border rounded-xl border-none px-2 py-2 w-[25rem] left-[8%]">
            <div>
              <h2 className="font-bold text-xl text-white">
                Streamline Your Workload
              </h2>
              <p className="text-white text-[12px] w-[80%]">
                Optimize your workflow with our platform's seamless outsourcing
                solutions.
              </p>
            </div>
            <img src="./pictures/Arc.svg" alt="" />
          </div>
        </div>

        <div className="h-[25rem] w-[38rem] relative">
          <img src="pictures/girl.png" alt="" />
          <div className="flex bg-[rgba(0,0,0,0.4)] absolute bottom-3 border rounded-xl px-2 py-2 w-[35rem] left-[4%] border-none">
            <div>
              <h2 className="font-bold text-xl text-white">
                Tap into our pool of talented Designers
              </h2>
              <p className="text-white text-[12px] w-[80%]">
                a diverse pool of talented creatives ready to tackle your
                projects, allowing you to focus on what matters most
              </p>
            </div>
            <img src="./pictures/Arc.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-64 mt-40">
        <div>
          <img src="./pictures/keepscrolling.svg" alt="" />
        </div>
        <div className="w-[30%]">
          <h2>Who are we?</h2>
          <div>
            <div className="flex gap-3">
              <button className="bg-[#E52424] px-4 py-1 border rounded-2xl text-white text-[12px]">
                About WMMW
              </button>
              <button className="bg-[#E52424] px-2 py-1 border rounded-full text-white text-[12px]">
                ...
              </button>
            </div>
            <p className="">
              An independent creative web design and branding agency aiding
              overwhelmed creatives in outsourcing their workload to fellow
              professionals. Let’s aim for the top together!
            </p>
          </div>
        </div>
      </div>

      <div className="flex">
        <div>
          <div className="flex gap-2 items-center">
            <div className="bg-[#E52424] h-[10px] w-[10px] border rounded-full"></div>
            <h1 className="text-[1.5rem]">Our Services</h1>
          </div>
          <div className="flex justify-between">
            <p className="font-bold">
              We bring our passion for good design to brave brands and deliver
              something you can shout about.
            </p>

            <div>
              <div className="flex">
                01
                <p>Brand Identity Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default App;
