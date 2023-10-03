import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

import qZone1 from '../../../../assets/qZone1.png';
import qZone2 from '../../../../assets/qZone2.png';
import qZone3 from '../../../../assets/qZone3.png';
const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-2 mb-6">
        <h2 className="text-2xl">Login With</h2>

        <button className="btn btn-outline w-full">
          <FaGoogle />
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Github
        </button>
      </div>
{/*  step 2 */}
      <div className="p-4 mb-6">
        <h2 className="text-2xl">Find Us on</h2>

        <a className="p-4 flex  text-lg items-center border rounded-t-lg" href="">
          <FaFacebook  className="mr-3"/>
          FacebookF
        </a>
        <a className="p-4 flex  text-lg items-center border-x rounded-b-lg" href="">
          <FaTwitter  className="mr-2"/>
          Twitter
        </a>
        <a className="p-4 flex  text-lg items-center border rounded-b-lg" href="">
          <FaInstagram className="mr-2"/>
          Instagram
        </a>
      </div>
      {/* q zone step 3 */}
      <div className="p-4 space-y-2 mb-6">
        <h2 className="text-2xl">Q Zone</h2>
<img src={qZone1} alt="" />
<img src={qZone2} alt="" />
<img src={qZone3} alt="" />
      </div>
      <div className="border w-[267px] h-[509px] bg-amber-950 m-8 px-8 space-y-10">
        <h1 className="text-center text-white text-4xl font-bold">Create an Amazing Newspaper</h1>
        <p className="text-center text-lg">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
        <div className="justify-center items-center">
        <button className="bg-[#D72050] w-52 h-14 text-center ">Learn More</button>

        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
