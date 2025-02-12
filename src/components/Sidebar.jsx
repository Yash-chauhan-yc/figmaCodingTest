import Link from "next/link";

const Sidebar = () => {
    return (
        <aside className="bg-black text-white  min-h-screen flex flex-col  space-y-8">
            <div className="mb-6">
                <img src="logo.png" alt="Vayuz Logo" className="" />
            </div>

            <button type="button" className="transtion group flex h-12 w-34 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-900 transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out">Contact Us</div>
            </button>



            <nav className="flex flex-col space-y-6">
                <Link href="#app-development" className="hover:text-gray-400">
                    App Development
                </Link>
                <Link href="#challenges" className="hover:text-gray-400">
                    Challenges
                </Link>
                <Link href="#hire-developer" className="hover:text-gray-400">
                    Hire Developer
                </Link>
                <Link href="#community" className="hover:text-gray-400">
                    Community
                </Link>
            </nav>

            <div className="mt-32 mb-4">
                <img
                    src="/sidebarImg.png"
                    alt="Office Workspace"
                    className="rounded-lg mt-32  mb-4"
                />
                <p className="text-gray-400 w-44 text-sm">
                    Lorem ipsum dolor sit amet consectetur. Enim tempor posuere rutrum.
                </p>
            </div>
        </aside>
    );
};

export default Sidebar;
