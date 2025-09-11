import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'CitySage - AI-Powered Travel Platform',
      description: 'Smart India Hackathon 2024 project featuring currency converter, weather prediction, and LLM-based travel assistant using GPT API with real-time price comparison and trip planning.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Flask', 'React', 'Google Maps API', 'OpenWeather API'],
      githubUrl: 'https://github.com/gouthamreddy09/SIH',
      liveUrl: '#'
    },
    {
      title: 'Stable Diffusion Image Generator',
      description: 'AI-powered image generation platform using Stable Diffusion models with custom prompt engineering, batch processing capabilities, and fine-tuned parameters for creative content generation.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Stable Diffusion', 'PyTorch', 'Gradio', 'CUDA'],
      githubUrl: 'https://github.com/gouthamreddy09/vipplavintern',
      liveUrl: '#'
    },
    {
      title: 'RAG Pipeline Documentation System',
      description: 'Comprehensive Retrieval-Augmented Generation pipeline with PDF text extraction, semantic search using FAISS, and TinyLlama integration for contextual responses.',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'LangChain', 'FAISS', 'SentenceTransformers', 'TinyLlama'],
      githubUrl: 'https://github.com/gouthamreddy09/rag',
      liveUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 p-3 rounded-full text-white hover:bg-gray-700 transition-colors duration-200"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition-colors duration-200"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                  </a>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;