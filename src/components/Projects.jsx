import aiImageGenImg from "../assets/ai-image-generator.jpg";
import memoriesImg from "../assets/memories.jpg";
import myMarkdownBlogImg from "../assets/my-markdown-blog.jpg";
import qrCodeGenImg from "../assets/qr-code-generator.jpg";
import musicPlayerImg from "../assets/simple-music-player.jpg";
import skRadioPlayerImg from "../assets/sk-radio-player.jpg";
import sortingHatImg from "../assets/sorting-hat.jpg";
import todoListSupabaseImg from "../assets/todo-list-supabase.jpg";
import trelloImg from "../assets/trello-clone.jpg";
import weatherAppImg from "../assets/weather-app.jpg";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  // https://trello-clone-juleni.vercel.app/
  // https://ai-image-generator-brown.vercel.app/
  // https://ai-sorting-hat.vercel.app/
  // https://juleni.github.io/memories-storage-speech/
  // https://juleni.github.io/music-player-2/
  // https://juleni.github.io/qrcode-generator/
  // https://juleni.github.io/radio-player-app/
  // https://juleni.github.io/dictaphone/
  // https://juleni.github.io/chatbot/
  // https://todo-list-supabase-gamma.vercel.app/
  // https://juleni.github.io/radio-player-app/
  // https://juleni.github.io/weather-app/
  // https://blog-markdown-git-main-juleni.vercel.app/
  // https://juleni.github.io/blog/

  return (
    <div
      id="projects"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-10 pt-0"
    >
      <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-5">
        Projects
      </h1>
      <p className="text-center py-5">
        Below is a list of some of the projects I tried. All source codes are
        available on my{" "}
        <a
          href="https://github.com/juleni"
          target={"_blank"}
          rel="noreferrer"
          className="font-semibold hover:underline"
        >
          GitHub
        </a>{" "}
        page.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={aiImageGenImg}
          title="AI Image Generator"
          url={"https://ai-image-generator-brown.vercel.app/"}
        />
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
          img={memoriesImg}
          title="Memories Storage"
          url={"https://juleni.github.io/memories-storage-speech/"}
        />
        <ProjectItem
          img={todoListSupabaseImg}
          title="TODO List Supabase"
          url={"https://todo-list-supabase-gamma.vercel.app/"}
        />
        <ProjectItem
          img={qrCodeGenImg}
          title="QR Code Generator"
          url={"https://juleni.github.io/qrcode-generator/"}
        />
        <ProjectItem
          img={skRadioPlayerImg}
          title="SK Radio Player"
          url={"https://juleni.github.io/radio-player-app/"}
        />
        <ProjectItem
          img={musicPlayerImg}
          title="Simple Music Player"
          url={"https://juleni.github.io/music-player-2/"}
        />
        <ProjectItem
          img={weatherAppImg}
          title="Weather Application"
          url={"https://juleni.github.io/weather-app/"}
        />
        <ProjectItem
          img={myMarkdownBlogImg}
          title="My Markdown Blog"
          url={"https://juleni.github.io/blog/"}
        />
      </div>
    </div>
  );
};

export default Projects;
