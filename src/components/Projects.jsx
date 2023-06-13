import qrCodeGenImg from "../assets/qr-code-generator.jpg";
import musicPlayerImg from "../assets/simple-music-player.jpg";
import sortingHatImg from "../assets/sorting-hat.jpg";
import trelloImg from "../assets/trello-clone.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  // https://trello-clone-juleni.vercel.app/
  // https://ai-sorting-hat.vercel.app/
  // https://juleni.github.io/music-player-2/
  // https://juleni.github.io/qrcode-generator/
  // https://juleni.github.io/dictaphone/
  // https://juleni.github.io/chatbot/

  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-10">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-5">
        Projects
      </h1>
      <p className="text-center py-5">
        Below is a list of some of the projects I tried. All source codes are
        available on my GitHub page.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={trelloImg}
          title="GPT Trello Clone"
          url={"https://trello-clone-juleni.vercel.app/"}
        />
        <ProjectItem
          img={sortingHatImg}
          title="AI Sorting Hat"
          url={"https://ai-sorting-hat.vercel.app/"}
        />
        <ProjectItem
          img={qrCodeGenImg}
          title="QR Code Generator"
          url={"https://juleni.github.io/qrcode-generator/"}
        />
        <ProjectItem
          img={musicPlayerImg}
          title="Simple Music Player"
          url={"https://juleni.github.io/music-player-2/"}
        />
      </div>
    </div>
  );
};

export default Projects;
