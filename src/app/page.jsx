import "./page.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-100">
      {/* Hero section */}

      <div id="hero">
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-gray-900 bg-opacity-50 text-white p-8">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl text-center">
            Advance your career with Learnly
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl text-center">
            Master skills that can help you succeed in your current job, or
            launch a new career.
          </p>

          {/* <!-- Search bar --> */}
          <div className="mt-6 flex w-full max-w-lg">
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="flex-grow p-3 rounded-l-md border-none focus:outline-none"
            />
            <button className="p-3 bg-blue-500 text-white rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="main flex gap-12 flex-wrap justify-center">
        <div className="card  card-compact bg-base-100 w-11/12 md:w-6/12 lg:w-64 shadow-xl">
          <figure>
            <img
              src="/landingPage/image_1.jpeg"
              alt="Students"
            />
          </figure>
          <div className="card-body mt-5">
            <h2 className="card-title ">Software Development</h2>
            <p>30+ cources</p>
            <div className="card-actions justify-center">
             <Link href="/students"> <button className="btn btn-primary cardbtn ">
                View All Cources
              </button></Link>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-11/12 md:w-6/12 lg:w-64 shadow-xl">
          <figure>
            <img
              src="/landingPage/image_2.jpeg"
              alt="Students"
            />
          </figure>
          <div className="card-body mt-5">
            <h2 className="card-title">Graphic Design</h2>
            <p>30+ Cources</p>
            <div className="card-actions justify-center">
            <Link href="/students"> <button className="btn btn-primary cardbtn ">
                View All Cources
              </button></Link>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 w-11/12 md:w-6/12 lg:w-64 shadow-xl">
          <figure>
            <img
              src="/landingPage/image_3.jpeg"
              alt="Students"
            />
          </figure>
          <div className="card-body mt-5 ">
            <h2 className="card-title">Digital Marketing</h2>
            <p>30+ Cources</p>
            <div className="card-actions justify-center">
            <Link href="/students"> <button className="btn btn-primary cardbtn ">
                View All Cources
              </button></Link>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-11/12 md:w-6/12 lg:w-64 shadow-xl">
          <figure>
            <img
              src="/landingPage/image_4.jpeg"
              alt="Students"
            />
          </figure>
          <div className="card-body mt-5 ">
            <h2 className="card-title">Machine Learning</h2>
            <p>30+ Cources</p>
            <div className="card-actions justify-center">
            <Link href="/students"> <button className="btn btn-primary cardbtn ">
                View All Cources
              </button></Link>
            </div>
          </div>
        </div>

        </div>

        {/* Student and admin Cards */}
        <div className="p-[30px] flex flex-col items-center" >
        <div className="card lg:card-side w-11/12 md:w-6/12 lg:w-6/12 bg-base-100  shadow-xl">
          <figure>
            <img
            className="w-[100%]"
              src="/landingPage/adminCard.jpeg"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Admin Dashboard</h2>
            <p>Manage user cources and more</p>
            <div className="card-actions justify-end">
              <Link href="/admin"><button className="btn btn-primary">Go to Admin</button></Link>
            </div>
          </div>
        </div>

        <div className="card lg:card-side w-11/12 md:w-6/12 lg:w-6/12 bg-base-100 shadow-xl mt-8">
          <figure>
            <img
            className="w-full"
              src="/landingPage/studentCard.jpeg"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Student Dashboard</h2>
            <p>Access cources, track, progress and more</p>
            <div className="card-actions justify-end">
            <Link href="/students"><button className="btn btn-primary">Go To Student</button> </Link>
            </div>
          </div>
        
        </div>
      </div>
    </main>
  );
}
