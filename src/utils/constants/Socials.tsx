import { FaDiscord, FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { SocialUrls } from './urls';

export const allSocials = [
	{
		name: 'aisharriyadasgupta',
		icon: <FaLinkedin />,
		bgcolor: '#0077b5',
		link: SocialUrls.linkedin,
	},
	{
		name: 'Email',
		icon: <FaEnvelope />,
		bgcolor: 'white',
		link: SocialUrls.email,
	},

];
