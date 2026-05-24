export interface Skill {
  skill_name: string
  Image: string
  width: number
  height: number
}

export const skills: Skill[] = [
  // Networking & Cloud
  { skill_name: 'CCNA', Image: '/networking.png', width: 70, height: 70 },
  { skill_name: 'Routing & Switching', Image: '/networking.png', width: 70, height: 70 },
  { skill_name: 'Network Troubleshooting', Image: '/networking.png', width: 70, height: 70 },
  { skill_name: 'AWS Cloud Fundamentals', Image: '/aws.png', width: 70, height: 70 },
  { skill_name: 'Azure Cloud', Image: '/azure.svg', width: 70, height: 70 },
  { skill_name: 'Cloud Computing', Image: '/aws.png', width: 70, height: 70 },
  { skill_name: 'Linux Sys Admin', Image: '/linux.svg', width: 70, height: 70 },
  { skill_name: 'TCP/IP Fundamentals', Image: '/networking.png', width: 70, height: 70 },

  // Programming & Data Science
  { skill_name: 'Python', Image: '/python.svg', width: 70, height: 70 },
  { skill_name: 'C Language', Image: '/js.png', width: 65, height: 65 },
  { skill_name: 'C++', Image: '/ts.png', width: 80, height: 80 },
  { skill_name: 'Data Analysis', Image: '/postger.png', width: 70, height: 70 },
  { skill_name: 'Machine Learning', Image: '/python.svg', width: 70, height: 70 },
  { skill_name: 'Data Visualization', Image: '/python.svg', width: 70, height: 70 },
  { skill_name: 'PostgreSQL', Image: '/postger.png', width: 70, height: 70 },
  { skill_name: 'MySQL', Image: '/mysql.png', width: 70, height: 70 },

  // Tools & Technologies
  { skill_name: 'Git', Image: '/git.svg', width: 70, height: 70 },
  { skill_name: 'Docker', Image: '/docker.webp', width: 70, height: 70 },
  { skill_name: 'Kubernetes', Image: '/kubernetes.png', width: 50, height: 50 },
]

export const Socials = [
  {
    name: 'GitHub',
    src: '/github.png',
    link: 'https://github.com/aviral-verma',
  },
  {
    name: 'LinkedIn',
    src: '/instagram.svg',
    link: 'https://linkedin.com/in/aviral-verma',
  },
]
