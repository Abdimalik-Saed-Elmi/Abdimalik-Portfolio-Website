import { PiCertificateFill, PiProjectorScreen } from "react-icons/pi";
import user_info from "../../data/user_info.js";
import Project from "../Project.jsx";

function Projects() {
  return (
    <div className="">
     <h4 className="w-[86%] mx-auto text-xl dark:text-white mb-2 md:mb-2 font-bold flex gap-2 items-center">
              <PiProjectorScreen className="text-2xl text-red-800 dark:text-red-500" />
             Projects
            </h4>
    
    <section
      id="projects"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:px-16"
    >
      {user_info.projects.map((project, index) => {
        return (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            link={project.link}
          />
        );
      })}
    </section>
    </div>
  );
}

export default Projects;
