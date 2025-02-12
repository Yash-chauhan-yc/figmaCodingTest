import Link from "next/link";

const Bottom = () => {
  return (
    <>
      <section className="bg-black text-white py-12">
        <div className="container mx-auto flex flex-col justify-between lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">

          <div className="lg:w-2/3 bg-blue-900 rounded-lg relative">
            <img
              src="/frame.png"
              alt="AI Tech Image"
              className="w-full rounded-lg"
            />

            <div className="absolute top-0 left-0 p-6 space-y-4">
              <h2 className="w-1/2">
                Explore 'Future of Gen AI': Unveil the tech revolution reshaping our world. Join us as we navigate the future together.
              </h2>
            </div>

            <div className="absolute inset-0 flex justify-center items-center">
              <button className="bg-[#08A7CE] text-white font-semibold px-6 py-3 rounded-full">
                Read More
              </button>
            </div>

            <div className="absolute bottom-6 right-6 text-sm lg:text-base">
              Intelligence For Efficient Results
            </div>
          </div>

          <div className="text-right space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold">Future Of Gen AI</h2>
            <p className="text-sm lg:text-base">Heading in the direction of future.</p>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-16">
        <div className="container flex flex-col lg:flex-row justify-between items-start px-8 mx-auto space-y-12 lg:space-y-0">

          <div className="w-full lg:w-2/3 space-y-10">
            <nav className="flex flex-wrap space-x-4 lg:space-x-6 text-sm font-light">
              <Link href="#" className="hover:underline">Events</Link>
              <Link href="#" className="hover:underline">Gen AI</Link>
              <Link href="#" className="hover:underline">Careers</Link>
              <Link href="#" className="hover:underline">Case Study</Link>
              <Link href="#" className="hover:underline">SME Talks</Link>
            </nav>

            <div>
              <p className="text-lg lg:text-3xl font-light mt-8 lg:mt-28 w-full lg:w-2/4 font-quicksand">
                For any collaborative projects or enquiries feel free to connect with us.
              </p>
              <p className="font-bold text-lg lg:text-3xl font-quicksand ">vayuz.com</p>
            </div>
          </div>

          <div className="w-full lg:w-1/3 space-y-10">
            <h2 className="text-4xl lg:text-5xl font-bold">Connect With Us</h2>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  className="w-full bg-black border-b border-white text-white py-3 focus:outline-none"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  className="w-full bg-black border-b border-white text-white py-3 focus:outline-none"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full bg-black border-b border-white text-white py-3 focus:outline-none"
                  placeholder="Phone Number"
                />
              </div>
              <div className="flex justify-end">
                <button className="bg-custom-blue border-border-blue border-[1px] text-white font-semibold px-6 py-2 rounded-full">
                  Submit
                </button>
              </div>
            </form>
          </div>

        </div>

        <div className="flex flex-col lg:flex-row justify-between container mx-auto text-center text-sm mt-16 px-4 space-y-4 lg:space-y-0">
          <nav className="flex flex-wrap justify-center lg:justify-start space-x-4 lg:space-x-6 text-sm font-light">
            <Link href="#" className="hover:underline">About</Link>
            <Link href="#" className="hover:underline">Insights</Link>
            <Link href="#" className="hover:underline">Community</Link>
            <Link href="#" className="hover:underline">Privacy & Policies</Link>
          </nav>
          <p className="opacity-70">Copywrite dolor sit amet consectetur. Enim tempor posuere rutrum convallis.</p>
        </div>
      </footer>



    </>
  );
};

export default Bottom;
