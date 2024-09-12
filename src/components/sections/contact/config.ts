import { Contact } from '@/types/contact';
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiYoutube
} from '@icons-pack/react-simple-icons';

const contact: Contact = {
  email: 'social8ankanroy@gmail.com',
  socials: [
    {
      name: 'Github',
      href: 'https://github.com/cu8code',
      Icon: SiGithub
    },
    {
      name: 'Youtube',
      href: 'https://youtube.com/@theankanofficial',
      Icon: SiYoutube
    },
    {
      name: 'X',
      href: 'https://x.com/cu8code',
      Icon: SiX
    },
    {
      name: 'Linkedin',
      href: 'https://linkedin.com/in/usrbincat',
      Icon: SiLinkedin
    }
  ]
};

export { contact };
