import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-hero-pattern py-8 relative">
        <h1 className="text-[5rem] font-bold w-[50%] text-center">
          The Creative{" "}
          <div className="relative max-w-fit max-h-fit inline-flex flex-col items-center">
            <span>Agency</span>
            <img
              src="/pictures/path.svg"
              alt="path"
              className="absolute bottom-1 -z-10 h-4 w-[250px] ml"
            />
          </div>{" "}
          With A Twist
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

      <div class="flex justify-center gap-6 w-full h-[800px]">
        <div class="relative w-[30%]; h-[70%]">
          <img
            class="h-full w-full object-cover"
            src="pictures/guy.png"
            alt=""
          />
          <div class="flex bg-[rgba(0,0,0,0.4)] absolute bottom-3 border rounded-xl border-none px-2 py-2 left-[3.4%] w-[35rem]">
            <div>
              <h2 class="font-bold text-xl text-white">
                Streamline Your Workload
              </h2>
              <p class="text-white text-[12px] w-[80%]">
                Optimize your workflow with our platform's seamless outsourcing
                solutions.
              </p>
            </div>
            <img src="./pictures/Arc.svg" alt="" />
          </div>
        </div>

        <div class="relative w-[30%]; h-[70%]">
          <img
            class="h-full w-full object-cover"
            src="pictures/girl.png"
            alt=""
          />
          <div class="flex bg-[rgba(0,0,0,0.4)] absolute bottom-3 border border-none rounded-xl px-2 py-2 left-[3.5%] w-[50rem]">
            <div>
              <h2 class="font-bold text-xl text-white">
                Tap into our pool of talented Designers
              </h2>
              <p class="text-white text-[12px] w-[80%]">
                a diverse pool of talented creatives ready to tackle your
                projects, allowing you to focus on what matters most
              </p>
            </div>
            <img src="./pictures/Arc.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-64 items-center">
        <div>
          <img
            className="w-[300px]"
            src="./pictures/keepscrolling.svg"
            alt=""
          />
        </div>
        <div className="w-[30%] flex flex-col">
          <div>Who are we?</div>

          <div className="flex gap-3 py-6">
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

      <div className="flex justify-center gap-56 w-[95%] mx-16  mt-48 mb-56">
        <div className="flex flex-col">
          <h1 className="text-[1.5rem]">Our Services</h1>
          <p className="font-bold text-[24px] w-[296px]">
            We bring our passion for good design to brave brands and deliver
            something you can shout about.
          </p>
        </div>

        <div className="w-[50%] flex flex-col">
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

      <div>
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="h-2 w-2 bg-[#E52424] border rounded-full"></div>
          <p className="text-[24px]">Our Works</p>
        </div>
        <div className="flex flex-wrap gap-16 justify-center mb-32">
          <div>
            <img src="./pictures/Frame01.png" alt="" />
            <div className="flex items-center gap-1 py-2">
              <div className="h-2 w-2 border rounded-full bg-[#E52424]"></div>
              <p>2024</p>
            </div>
            <p>Crypto & Nft Wallet || UI Exploration</p>
          </div>
          <div>
            <img src="./pictures/Frame02.png" alt="" />
            <div className="flex items-center gap-1 py-2">
              <div className="h-2 w-2 border rounded-full bg-[#E52424]"></div>
              <p>2024</p>
            </div>
            <p>Crypto & Nft Wallet || UI Exploration</p>
          </div>
          <div>
            <img src="./pictures/Frame03.png" alt="" />
            <div className="flex items-center gap-1 py-2">
              <div className="h-2 w-2 border rounded-full bg-[#E52424]"></div>
              <p>2024</p>
            </div>
            <p>Crypto & Nft Wallet || UI Exploration</p>
          </div>
          <div>
            <img src="./pictures/Frame04.png" alt="" />
            <div className="flex items-center gap-1 py-2">
              <div className="h-2 w-2 border rounded-full bg-[#E52424]"></div>
              <p>2024</p>
            </div>
            <p>Crypto & Nft Wallet || UI Exploration</p>
          </div>
        </div>

        <div className="w-full flex justify-center mb-32">
          <button className="border-[1.5px] px-2 border-[#E52424] rounded-lg py-1">View More</button>
        </div>

        <div>
          
        </div>
      </div>
    </>
  );
};

export default App;
