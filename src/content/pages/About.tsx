import {
  LuUser,
  LuBriefcase,
  LuCode,
  LuHeart,
  LuGithub,
  LuLinkedin,
  LuMail,
} from "react-icons/lu";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
            <LuUser className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-4xl font-bold">About Me</h1>
        </div>

        <div className="bg-card/30 rounded-lg p-6 border border-border">
          <p className="text-lg leading-relaxed mb-4">
            Hi - my name is{" "}
            <span className="font-semibold text-blue-400">James McDougall</span>
            , and I'm a software developer from the UK. I recently graduated
            with a Bachelor's in Computer Science, achieving a first.
          </p>
          <p className="text-muted-foreground">
            You might be interested in my Github page, which you can find{" "}
            <a
              href="https://github.com/yakasov/"
              className="text-blue-400 hover:underline font-medium"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
            <LuBriefcase className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-2xl font-semibold">Experience</h3>
        </div>

        <div className="bg-card/20 rounded-lg p-5 border border-border hover:bg-card/30 transition-colors">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-semibold text-lg">Software Developer</h4>
            <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
              Work
            </span>
          </div>
          <p className="text-blue-400 font-medium text-sm">
            ProspectSoft (The Access Group)
          </p>
          <p className="text-muted-foreground text-sm mb-3">
            Aug 2024 - Present
          </p>
          <div className="text-sm space-y-2">
            <p>
              After finishing my degree, I returned to ProspectSoft and began
              working as a fully fledged Software Developer. Since being back, I
              have been involved in more complex work, including getting hands
              on with our billing and cancellations system, and taking on lead
              development of a mobile version of our system.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-card/20 rounded-lg p-5 border border-border hover:bg-card/30 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-lg">
                Bachelor of Science in Computer Science
              </h4>
              <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                Education
              </span>
            </div>
            <p className="text-blue-400 font-medium text-sm">
              University of Portsmouth
            </p>
            <p className="text-muted-foreground text-sm mb-3">
              Sep 2020 - Jul 2024
            </p>
            <p className="text-sm">
              I studied Computer Science with a year in industry and achieved a
              First with Honours.
            </p>
          </div>

          <div className="bg-card/20 rounded-lg p-5 border border-border hover:bg-card/30 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-lg">Assistant Developer</h4>
              <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                Work
              </span>
            </div>
            <p className="text-blue-400 font-medium text-sm">
              ProspectSoft (The Access Group)
            </p>
            <p className="text-muted-foreground text-sm mb-3">
              Aug 2022 - Aug 2023
            </p>
            <div className="text-sm space-y-2">
              <p>
                I worked alongside permanent developers at ProspectSoft and took
                on many programming tasks of my own. During this time, I used
                TypeScript, SQL, C# and other tools to create a fantastic
                product for consumers.
              </p>
              <p>
                Additionally, I oversaw recruitment for future developer
                placements, which involved vetting applicants, sending technical
                tests and conducting phone interviews.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
            <LuCode className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-2xl font-semibold">Skills</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card/20 rounded-lg p-5 border border-border">
            <h4 className="font-semibold mb-3 text-orange-400">
              Programming Languages & Frameworks
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                "JavaScript",
                "HTML5 & CSS",
                "TypeScript",
                "React",
                "React Native (Expo)",
                "Vue",
                "Node.js",
                "Python",
                "C#",
                "Java",
                "SQL",
              ].map((skill) => (
                <span
                  key={skill}
                  className="text-sm bg-orange-500/10 text-orange-300 px-2 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-card/20 rounded-lg p-5 border border-border">
            <h4 className="font-semibold mb-3 text-blue-400">
              Tools & Technologies
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Azure DevOps",
                "Git and GitHub",
                "Visual Studio",
                "Jira",
                "Confluence",
                "Powershell",
                "PowerBuilder",
                "Sybase SQL Anywhere",
              ].map((tool) => (
                <span
                  key={tool}
                  className="text-sm bg-blue-500/10 text-blue-300 px-2 py-1 rounded"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
            <LuHeart className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-2xl font-semibold">Interests</h3>
        </div>

        <div className="space-y-4">
          <div className="bg-card/20 rounded-lg p-5 border border-border">
            <h4 className="font-semibold text-green-400 mb-2">
              💻 Programming
            </h4>
            <p className="text-sm">
              In my free-time, I work on and maintain several of the projects
              found in the Projects section. Generally, I program mostly in
              JavaScript and often write quick scripts in it, either in browser
              or using Node.
            </p>
          </div>

          <div className="bg-card/20 rounded-lg p-5 border border-border">
            <h4 className="font-semibold text-purple-400 mb-2">🎵 Music</h4>
            <p className="text-sm">
              I love music, with my favourite genres being Metal, Rock,
              Metalcore, Deathcore, Screamo and similar. Some of my favourite
              bands include <span className="text-purple-300">Spiritbox</span>,{" "}
              <span className="text-purple-300">Bring Me The Horizon</span>,{" "}
              <span className="text-purple-300">Poppy</span>,{" "}
              <span className="text-purple-300">Knocked Loose</span>,{" "}
              <span className="text-purple-300">Bad Omens</span>,{" "}
              <span className="text-purple-300">Of Mice & Men</span> and{" "}
              <span className="text-purple-300">SeeYouSpaceCowboy</span>, to
              name just a few.
            </p>
          </div>

          <div className="bg-card/20 rounded-lg p-5 border border-border">
            <h4 className="font-semibold text-blue-400 mb-2">🎮 Gaming</h4>
            <p className="text-sm">
              I play a lot of games, with some of my favourites being{" "}
              <span className="text-blue-300">Fallout</span>,{" "}
              <span className="text-blue-300">BioShock</span>,{" "}
              <span className="text-blue-300">System Shock</span>, and{" "}
              <span className="text-blue-300">Overwatch</span>. I have
              previously played D&D 5e and now more regularly play Pathfinder 2e
              (and yes, I have played Baldur's Gate 3, which was brilliant!)
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/60 rounded-lg p-6 border border-border">
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/yakasov"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <LuGithub className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/james-mcdougall-6b44b0193/"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <LuLinkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:jamesamcdou@gmail.com"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <LuMail className="w-5 h-5" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}
