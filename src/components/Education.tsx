import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Secondary School Certificate (10th Grade)',
      institution: 'Narayana School',
      location: 'Chaitanyapuri, Hyderabad',
      period: '2020',
      description: 'Completed secondary education under State Board of Telangana with excellent academic performance.',
      achievements: [
        'Achieved 9.8 CGPA',
        'Strong foundation in Mathematics and Science',
        'Consistent academic excellence throughout secondary education'
      ]
    },
    {
      degree: 'Intermediate (12th Grade) - MPC Stream',
      institution: 'Narayana Jr College',
      location: 'Doctors Colony, Sarron Nagar, Hyderabad',
      period: '2020 - 2022',
      description: 'Completed intermediate education in Mathematics, Physics, and Chemistry (MPC) stream under State Board of Telangana.',
      achievements: [
        'Achieved 84% in intermediate examinations',
        'Strong foundation in Mathematics, Physics, and Chemistry',
        'Prepared for competitive entrance examinations'
      ]
    },
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Your College/University Name',
      location: 'City, State',
      period: '2022 - 2026',
      description: 'Specializing in AI & Machine Learning with focus on Generative AI and prompt engineering.',
      achievements: [
        'Relevant coursework in Machine Learning, Data Structures, and Algorithms',
        'Active participant in coding competitions and hackathons',
        'Member of AI/ML club and technical societies'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-blue-400">Education</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey and educational background
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== education.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-blue-400 opacity-30"></div>
              )}
              
              <div className="flex items-start mb-12">
                {/* Education icon */}
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-6 relative z-10">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-grow bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                      <p className="text-blue-400 font-semibold">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-gray-400 text-sm mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold">Highlights:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {edu.achievements.map((achievement, achievementIndex) => (
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

export default Education;