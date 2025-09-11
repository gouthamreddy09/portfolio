import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'AI/ML & NLP Intern',
      company: 'Vipplav AI',
      location: 'Remote',
      period: 'May 2025 - June 2025',
      description: 'Worked on AI/ML and Natural Language Processing projects during 2-month internship, gaining hands-on experience with machine learning model development and deployment.',
      achievements: [
        'Gained hands-on experience with ML model development',
        'Contributed to NLP-based solutions and data processing pipelines',
        'Applied theoretical knowledge to real-world AI applications'
      ]
    },
    {
      title: 'Smart India Hackathon Participant',
      company: 'Government of India',
      location: 'India',
      period: '2024',
      description: 'Selected participant developing AI-powered solutions for CitySage travel platform and Farm Link agricultural marketplace with focus on real-world problem solving.',
      achievements: [
        'Developed AI-integrated travel and agricultural platforms',
        'Implemented real-time APIs and LLM-based assistants',
        'Explored Prompt Engineering and RAG concepts'
      ]
    },
    {
      title: 'Computer Science Student',
      company: 'GITAM University',
      location: 'Hyderabad, Telangana',
      period: '2022 - 2026',
      description: 'Pursuing Bachelor of Technology in Computer Science and Engineering with specialization in AI & Machine Learning. Active participant in hackathons and technical projects.',
      achievements: [
        'Maintaining CGPA of 7.48',
        'Specialized in AI & Machine Learning',
        'Participated in multiple hackathons and technical competitions'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="text-blue-400">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-blue-400 opacity-30"></div>
              )}
              
              <div className="flex items-start mb-12">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-6 relative z-10">
                  <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                </div>
                
                <div className="flex-grow bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
                      <p className="text-blue-400 font-semibold">{experience.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-gray-400 text-sm mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {experience.period}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {experience.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{experience.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold">Key Achievements:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-sm">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;