import { allCertificates } from './constants/Certificate';
import { allEducation } from './constants/Education';
import { allExperiences } from './constants/Experiences';
// import { allOthers } from './constants/Others';
import { allProjects } from './constants/Projects';
import {
	AchievementProps,
	CertificateProps,
	EducationProps,
	ExperienceProps,
	OtherProps,
	ProjectProps,
	STORY_TYPES,
} from './developerStory';

export interface singleDeveloperStoryDataProps {
	id: string;
	storyType: STORY_TYPES;
	data:
		| EducationProps
		| AchievementProps
		| CertificateProps
		| ExperienceProps
		| OtherProps
		| ProjectProps;
}

export interface DeveloperStoryDataProps
	extends Array<singleDeveloperStoryDataProps> {}

export const developerStoryData: DeveloperStoryDataProps = [
	{
		id: 'exp-rfs',
		storyType: 'experience',
		data: allExperiences.rfs,
	},
	
	
	{
		id: 'edu-symbiosis',
		storyType: 'education',
		data: allEducation.symbiosis,
	},
	{
		id: 'edu-salesian',
		storyType: 'education',
		data: allEducation.salesian,
	},
	{
		id: 'edu-sjhsm',
		storyType: 'education',
		data: allEducation.sjhsm,
	},
	{
		id: 'edu-smsslg',
		storyType: 'education',
		data: allEducation.smsslg,
	},
	
	
	{
		id: 'cert-coulog1',
		storyType: 'certificate',
		data: allCertificates.coulog1,
	},
	{
		id: 'cert-coulog2',
		storyType: 'certificate',
		data: allCertificates.coulog2,
	},
	
];
