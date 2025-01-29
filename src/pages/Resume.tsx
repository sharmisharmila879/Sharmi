import { Download } from 'lucide-react';

const experiences = [
  {
    title: 'Front end Developer',
    company: 'ParkQwik',
    period: '2025 - Present',
    description: 'Front-End Developer skilled in Various Languages and modern frameworks, crafting responsive and user-friendly web experiences.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Azero Tech',
    period: '2024 - present',
    description: 'Developed and maintained various web applications using modern technologies.',
  },
  {
    title: 'Full Stack Developer',
    company: 'UNTIK',
    period: '2025 - present',
    description: 'Developing scalable web applications with front-end and back-end technologies, ensuring seamless user experiences and efficient performance.',
  },
  {
    title: 'Flutter Developer',
    company: 'Myme Techies',
    period: '2023 - present',
    description: 'Cofounder of Myme Techies ',
  },
];

const education = [
  {
    degree: 'Bachelor of Technology in Artificial Intelligence and Data Science',
    school: 'AnnaiMira College of Engineering and Technology',
    period: '2022 - 2026',
  },
];

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto">
  <div className="flex justify-between items-center mb-8">
    <h1 className="text-4xl font-bold text-[#8D45BC] dark:text-[#FED051]">Resume</h1>
    <a href="N.SHARMILA(RESUME).pdf" download target="_blank" rel="noopener noreferrer">
      <button className="flex items-center gap-2 px-4 py-2 rounded-lg
                        bg-[#8D45BC] dark:bg-[#FED051] text-white dark:text-black
                        hover:opacity-90 transition-opacity">
        <Download className="w-5 h-5" />
        Download CV
      </button>
    </a>
  </div>



      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6 text-[#8D45BC] dark:text-[#FED051]">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white dark:bg-[#141414] shadow-lg
                         hover:shadow-[0_0_15px_rgba(141,69,188,0.3)] dark:hover:shadow-[0_0_15px_rgba(254,208,81,0.3)]
                         transition-shadow"
              >
                <h3 className="text-xl font-semibold text-[#8D45BC] dark:text-[#FED051]">{exp.title}</h3>
                <p className="text-black dark:text-white">{exp.company}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</p>
                <p className="mt-2 text-black dark:text-white">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-[#8D45BC] dark:text-[#FED051]">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white dark:bg-[#141414] shadow-lg
                         hover:shadow-[0_0_15px_rgba(141,69,188,0.3)] dark:hover:shadow-[0_0_15px_rgba(254,208,81,0.3)]
                         transition-shadow"
              >
                <h3 className="text-xl font-semibold text-[#8D45BC] dark:text-[#FED051]">{edu.degree}</h3>
                <p className="text-black dark:text-white">{edu.school}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}