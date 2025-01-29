import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&h=400',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&h=400',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with detailed forecasts and animations',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&h=400',
    technologies: ['React', 'TypeScript', 'OpenWeather API'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-[#8D45BC] dark:text-[#FED051]">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden bg-white dark:bg-[#141414] shadow-lg
                     hover:shadow-[0_0_15px_rgba(141,69,188,0.3)] dark:hover:shadow-[0_0_15px_rgba(254,208,81,0.3)]
                     transition-all transform hover:-translate-y-1"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-[#8D45BC] dark:text-[#FED051]">
                {project.title}
              </h3>
              <p className="text-black dark:text-white mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-sm rounded-full
                             bg-[#8D45BC]/10 dark:bg-[#FED051]/10
                             text-[#8D45BC] dark:text-[#FED051]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#8D45BC] dark:text-[#FED051] hover:opacity-80"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#8D45BC] dark:text-[#FED051] hover:opacity-80"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}