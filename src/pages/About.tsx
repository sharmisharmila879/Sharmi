
const skills = [
  { "category": "Frontend", "items": ["React", "HTML5", "CSS", "JavaScript", "TypeScript"] },
  { "category": "Backend", "items": ["Python", "SQL", "PL/SQL", "Java", "C & C++"] },
  { "category": "Tools", "items": ["Visual Studio Code", "Figma", "Canva", "MS SQL", "MS Office"] },
  { "category": "Other", "items": ["UI/UX Design", "Flutter Development", "Deep Learning", "Database Management"] }
];

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
        <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-[#8D45BC] dark:ring-[#FED051]">
          <img
            src="profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4 text-[#8D45BC] dark:text-[#FED051]">About Me</h1>
          <p className="text-black dark:text-white mb-4">
            I'm a passionate full-stack developer with over 5 years of experience in building web applications.
            I love creating elegant solutions to complex problems and am constantly learning new technologies.
          </p>
          <p className="text-black dark:text-white">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
            or sharing my knowledge through technical writing and mentoring.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-[#8D45BC] dark:text-[#FED051]">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillSet) => (
            <div
              key={skillSet.category}
              className="p-6 rounded-lg bg-white dark:bg-[#141414] shadow-lg
                       hover:shadow-[0_0_15px_rgba(141,69,188,0.3)] dark:hover:shadow-[0_0_15px_rgba(254,208,81,0.3)]
                       transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#8D45BC] dark:text-[#FED051]">
                {skillSet.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillSet.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm font-medium
                             bg-[#8D45BC]/10 dark:bg-[#FED051]/10
                             text-[#8D45BC] dark:text-[#FED051]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}