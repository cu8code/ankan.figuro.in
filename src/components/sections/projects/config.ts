import { Project } from '@/types/project';

const projects: Project[] = [
  {
    name: 'Personal Portfolio Website',
    slug: 'portfolio',
    description:
      'A personal portfolio to showcase your coding projects, resume, and skills in a beautifully designed format.',
    thumbnail: '/images/projects/portfolio/cover.jpg',
    tags: ['NextJS', 'Chakra UI', 'TailwindCSS', 'Drizzle ORM']
  },
  {
    name: 'Code Runner',
    slug: 'recipe_app',
    description:
      'Run C C++ Python code online and see the output in real time.',
    thumbnail: '/images/projects/recipe_app/cover.jpg',
    tags: ['Nextjs', 'Express', 'SUpabase', 'Docker', 'Docker Compose']
  },
  {
    name: 'Magic Blockers',
    slug: 'study_group',
    description:
      'Block Distracting websites to make you study more efficiently.',
    thumbnail: '/images/projects/study_group/cover.jpg',
    tags: ['Nextjs', 'Supabsae', 'Github Actions', 'Docker', 'Docker Compose']
  }
];

export { projects };
