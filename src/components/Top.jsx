const Top = () => {
  return (
    <div>
      <section className="bg-black text-white py-12 relative mb-56">
       
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div className="space-y-6">
            <h2 className="text-4xl lg:text-6xl font-bold mt-10 font-playfair">
              Unlock the Potential of Flutter
            </h2>
            <p className="text-lg font-quicksand ">
              Your Premier Partner for Cross-Platform App Excellence!
            </p>
            <button className="bg-[#08A7CE] text-white px-8 py-3 rounded-full font-bold font-quicksand ">
              UPGRADE YOUR TECH
            </button>
          </div>

          <div className="relative w-fit mx-auto">
            <img
              src="/rectangle.png"
              alt="Flutter Code"
              className=" rounded-lg"
            />

            <img
              src="/rectangle1.png"
              alt="Code Snippet 1"
              className="absolute  top-52 -right-32 shadow-lg"
            />

            <img
              src="/rectangle2.png"
              alt="Code Snippet 2"
              className="absolute right-0 -bottom-32 shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="bg-black text-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8">

          <div>
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair w-1/2">Flutter's Dawn</h2>
            <p className="text-lg text-gray-400 font-quicksand ">History of Flutter</p>
          </div>

          <div>
            <p className="text-lg font-quicksand ">
              Uncover the fascinating story of Flutter in 'Flutter's Dawn: History
              of Flutter.' From humble origins to global acclaim, delve into its captivating
              narrative. Explore milestones, triumphs, and challenges. Whether tech enthusiast
              or curious mind, join us on this captivating journey!{" "}
              <a href="#begin" className="text-[#08A7CE] hover:underline">
                Click to begin!
              </a>
            </p>

            <div className="mt-4 text-right mr-10">
              <span className="inline-block h-1 w-8 bg-gray-500 mr-2"></span>
              <span className="inline-block h-1 w-4 bg-gray-500"></span>
            </div>
          </div>

          <div className="flex justify-end">
            <a
              href="#begin"
              className="bg-[#08A7CE]  text-white px-8 py-3 rounded-full flex items-center font-bold"
            >
              BEGIN
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="ml-2 w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Top;
