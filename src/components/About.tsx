import React from 'react';
import { Code, Palette, Database, Globe } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      category: 'AI/ML',
      icon: <Code className="w-6 h-6" />,
      technologies: ['TensorFlow', 'PyTorch', 'LLM concepts', 'Stable Diffusion', 'RAG systems']
    },
    {
      category: 'Programming',
      icon: <Palette className="w-6 h-6" />,
      technologies: ['Python', 'JavaScript', 'Java', 'HTML', 'Flask', 'React.js']
    },
    {
      category: 'APIs & Tools',
      icon: <Database className="w-6 h-6" />,
      technologies: ['Google Maps API', 'OpenWeather API', 'SQL', 'Supabase', 'Git']
    },
    {
      category: 'Specializations',
      icon: <Globe className="w-6 h-6" />,
      technologies: ['Prompt Engineering', 'Vector embeddings', 'Google Colab', 'CUDA']
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate Computer Science student specializing in AI & Machine Learning, using AI to build innovative websites and train custom models
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <div className="w-72 h-72 bg-gray-800 rounded-full flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <p className="text-sm">Your photo will appear here</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a Computer Science undergraduate specializing in AI & Machine Learning, with a growing 
              passion for Generative AI and prompt engineering. Selected participant at Smart India 
              Hackathon 2024, with hands-on experience in developing AI-integrated, user-centric solutions.
              I leverage AI to build innovative applications and train custom models for real-world problems.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Completed AI/ML & NLP internship at Vipplav AI, gaining practical industry experience. 
              Developing skills in Python, Flask, and LLM implementation, with a strong focus on 
              translating theoretical knowledge into practical, real-world applications through AI-powered 
              solutions and model training.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                  <div className="flex items-center mb-2">
                    <div className="text-blue-400 mr-2">
                      {skill.icon}
                    </div>
                    <h4 className="font-semibold text-white">{skill.category}</h4>
                  </div>
                  <div className="text-sm text-gray-400">
                    {skill.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;