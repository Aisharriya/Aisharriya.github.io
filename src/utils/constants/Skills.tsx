import { ReactNode } from 'react';
import {
	FaAngular,
	FaApple,
	FaCss3,
	FaDiscord,
	FaDocker,
	FaFigma,
	FaGitAlt,
	FaGithub,
	FaHtml5,
	FaJava,
	FaJs,
	FaNodeJs,
	FaPython,
	FaReact,
	FaSass,
	FaUbuntu,
	FaWindows,
} from 'react-icons/fa';
import {
	SiAntdesign,
	SiChakraui,
	SiExpress,
	SiHeroku,
	SiIntellijidea,
	SiJquery,
	SiManjaro,
	SiMaterialui,
	SiMongodb,
	SiMysql,
	SiNetlify,
	SiRedux,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
	SiVisualstudiocode,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import CIcon from '../../assets/icons/c-original.svg';
import CppIcon from '../../assets/icons/cplusplus-original.svg';
import Matlab from '../../assets/icons/matlab.svg';
import PrimeReactLogo from '../../assets/icons/primereact-logo.svg';
import NivoLogo from '../../assets/icons/nivo-logo.svg';
import { BsBootstrap, BsPieChart } from 'react-icons/bs';

export const Categories = [
	{ id: 'language', name: 'Programming Language' },
	{ id: 'frontend', name: 'Frontend Development' },
	{ id: 'backend', name: 'Backend Development' },
	{ id: 'framework', name: 'Framework' },
	{ id: 'database', name: 'Database System' },
	{ id: 'software', name: 'Software' },
	{ id: 'tool', name: 'Development Tool' },
	{ id: 'os', name: 'Operating System' },
	{ id: 'design', name: 'Design Tool' },
	{ id: 'hosting', name: 'Hosting Platform' },
	{ id: 'editor', name: 'Code Editor' },
	{ id: 'ide', name: 'IDE' },
	{ id: 'scripting', name: 'Scripting Language' },
	{ id: 'library', name: 'Software Library' },
	{ id: 'misc', name: 'Miscellaneous' },
];

const CategoriesId = Categories.map((e) => e.id);

export type CategoriesType = (typeof CategoriesId)[number];

export interface skillInterface {
	name: string;
	icon: ReactNode;
	bgcolor: string;
	id: string;
	link: string;
	color?: string;
	category?: CategoriesType[];
}

export const allSkills: skillInterface[] = [
	{
		name: 'C',
		icon: <CIcon height='1em' />,
		bgcolor: 'rgb(4, 99, 172)',
		link: 'https://devdocs.io/c/',
		id: 'skill_c',
		category: ['language'],
	},
	{
		name: 'C++',
		icon: <CppIcon height='1em' />,
		bgcolor: '#af0443',
		link: 'https://devdocs.io/cpp/',
		id: 'skill_cpp',
		category: ['language'],
	},
	{
		name: 'Java',
		icon: <FaJava />,
		bgcolor: '#f89820',
		link: 'https://docs.oracle.com/en/java/',
		color: 'black',
		id: 'skill_java',
		category: ['language'],
	},
	{
		name: 'Python',
		icon: <FaPython />,
		bgcolor: '#306998',
		link: 'https://docs.python.org/3/',
		id: 'skill_python',
		category: ['language'],
	},
	{
		name: 'HTML',
		icon: <FaHtml5 />,
		bgcolor: '#E34F26',
		link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
		id: 'skill_html',
		category: ['language', 'frontend'],
	},
	{
		name: 'CSS',
		icon: <FaCss3 />,
		bgcolor: '#264de4',
		link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
		id: 'skill_css',
		category: ['language', 'frontend'],
	},
	{
		name: 'JavaScript',
		icon: <FaJs />,
		bgcolor: '#F0DB4F',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		color: '#323330',
		id: 'skill_javascript',
		category: ['language', 'frontend'],
	},
	
	{
		name: 'Matlab',
		icon: <Matlab height='1em' />,
		bgcolor: '#f51300',
		link: 'https://mathworks.com/help/matlab/',
		id: 'skill_matlab',
		category: ['language', 'software'],
	},
	
	
	{
		name: 'MySQL',
		icon: <SiMysql />,
		bgcolor: '#f29111',
		link: 'https://www.mysql.com/',
		color: '#2c2c2c',
		id: 'skill_mysql',
		category: ['database', 'backend'],
	},
	{
		name: 'Git',
		icon: <FaGitAlt />,
		bgcolor: '#F1502F',
		link: 'https://git-scm.com/doc',
		id: 'skill_git',
		category: ['software'],
	},
	{
		name: 'GitHub',
		icon: <FaGithub />,
		bgcolor: 'white',
		link: 'https://github.com',
		color: '#171515',
		id: 'skill_github',
		category: ['software'],
	},
	{
		name: 'VS Code',
		icon: <SiVisualstudiocode />,
		bgcolor: '#0065A9',
		link: 'https://code.visualstudio.com/',
		id: 'skill_vscode',
		category: ['software', 'editor'],
	},

];
