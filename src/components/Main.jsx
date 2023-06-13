import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  // src="https://images.unsplash.com/photo-1569591803741-6246fbc6934c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  // src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
  // src="https://images.unsplash.com/photo-1543878507-84ec11237ebe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80"
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-700">
            <span className="flex justify-center">My name is</span>
            <span className="flex justify-center">Julian Legeny</span>
          </h1>
          <h2 className="flex sm:text-3xl text-2xl text-gray-600 pt-4">
            I`m a
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1000,
                "Fullstack Programmer",
                1000,
                "Tech Enthusiast",
                1000,
              ]}
              wrapper="div"
              speed={50}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://github.com/juleni"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaGithub className="cursor-pointer" size={20} />
            </a>

            <FaTwitter className="cursor-pointer" size={20} />
            {/** <FaFacebook className="cursor-pointer" size={20} />*/}

            <FaInstagram className="cursor-pointer" size={20} />
            <a
              href="https://sk.linkedin.com/in/julian-legeny-45259b208"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaLinkedin className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
