import Project1img from "../assets/hospital-building.png";
import Project2img from "../assets/school.png";
import Project3img from "../assets/inventory.png";
import Project4img from "../assets/cashier.png";

export default function project() {
  return (
    <>
      <div className="bg-indigo-800 lg:m-20  max-w-full ssm:m-5">
        <div className="grid justify-items-center m-10">
          <h1 className="text-3xl text-white mt-10">Projects</h1>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4 p-5">
            <div
              className="max-w-md mx-auto bg-white rounded-xl
            shadow-md overflow-hidden  md:max-w-2xl hover:animate-pulse"
            >
              <div className="md:flex ">
                <div className="p-8">
                  <div
                    className="uppercase tracking-wide text-sm to-indigo-500
                  font-semibold"
                  >
                    Hospital Management System
                  </div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum sequi repellendus odit!
                  </p>
                </div>
                <div className="md:shrink-0 p-5 ">
                  <img
                    src={Project1img}
                    alt="project1"
                    width={150}
                    height={150}
                  />
                </div>
              </div>
            </div>
            <div
              className="max-w-md mx-auto bg-white rounded-xl
            shadow-md overflow-hidden  md:max-w-2xl hover:animate-pulse"
            >
              <div className="md:flex ">
                <div className="md:shrink-0 p-5 ">
                  <img
                    src={Project2img}
                    alt="project1"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="p-8">
                  <div
                    className="uppercase tracking-wide text-sm to-indigo-500
                  font-semibold"
                  >
                    School Management System
                  </div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum sequi repellendus odit!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-2 gap-4 p-5">
            <div
              className="max-w-md mx-auto bg-white rounded-xl
            shadow-md overflow-hidden  md:max-w-2xl hover:animate-pulse"
            >
              <div className="md:flex ">
                <div className="p-8">
                  <div
                    className="uppercase tracking-wide text-sm to-indigo-500
                  font-semibold"
                  >
                    Inventory Management System
                  </div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum sequi repellendus odit!
                  </p>
                </div>
                <div className="md:shrink-0 p-5 ">
                  <img
                    src={Project3img}
                    alt="project1"
                    width={150}
                    height={150}
                  />
                </div>
              </div>
            </div>
            <div
              className="max-w-md mx-auto bg-white rounded-xl
            shadow-md overflow-hidden  md:max-w-2xl hover:animate-pulse"
            >
              <div className="md:flex ">
                <div className="md:shrink-0 p-5 ">
                  <img
                    src={Project4img}
                    alt="project1"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="p-8">
                  <div
                    className="uppercase tracking-wide text-sm to-indigo-500
                  font-semibold"
                  >
                    POS Management System
                  </div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum sequi repellendus odit!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
