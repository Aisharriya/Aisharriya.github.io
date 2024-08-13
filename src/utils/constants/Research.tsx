import { FaResearchgate } from 'react-icons/fa';
import { SiGooglescholar, SiOrcid, SiPublons } from 'react-icons/si';
import { ResearchProfiles } from './urls';
import SciProfiles from '../../assets/icons/sci-profiles.svg';

export const allResearchPapers = [
	
];

export const allResearchUrls = [
	{
		name: 'ORCID iD',
		icon: <SiOrcid />,
		bgcolor: '#A6CE39',
		link: ResearchProfiles.orcid,
	},
	{
		name: 'Google Scholar',
		icon: <SiGooglescholar />,
		bgcolor: '#356ac3',
		link: ResearchProfiles.googleScholar,
	},
	{
		name: 'Research Gate',
		icon: <FaResearchgate />,
		bgcolor: '#00cab9',
		link: ResearchProfiles.researchGate,
	},
	{
		name: 'Publons',
		icon: <SiPublons />,
		bgcolor: '#2d5c88',
		link: ResearchProfiles.publons,
	},
	{
		name: 'SciProfiles',
		icon: <SciProfiles height='1em' />,
		bgcolor: '#34c5df',
		link: ResearchProfiles.sciProfiles,
	},
];
