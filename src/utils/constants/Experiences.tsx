import { ExperienceProps } from 'utils/developerStory';
import railog from '/public/images/experience/raiselogo.jpeg';

export const allExperiences: { [key: string]: ExperienceProps } = {
	rfs: {
		fromDate: 'May 2024',
		toDate: 'July 2024',
		positionHeld: 'Business Intelligence Intern',
		orgName: 'Raise Financial Services',
		orgLocation: 'Western Edge 1, Mumbai',
		url: 'https://raiseholding.co/',
		imageURL: railog,
		description: `
Raise Financial Services is a Mumbai-based fintech startup focused on developing cutting-edge financial products like Dhan, an investment platform for traders and long-term investors. 
Backed by $22 million in Series A funding, Raise is committed to innovating the financial landscape in India with technology-driven solutions and exceptional user experiences.

- Analysed comparison reports of Dhan with NSE and BSE on a day-on-day basis
- Automated google sheets using Python
- Worked directly with the product and compliance team
- Delivered adhoc requirements of all the departments using SQL queries`,
		featured: true,
	},
	
};
