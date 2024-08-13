import { EducationProps } from 'utils/developerStory';
import smsslgImg from '/public/images/education/smsslg-logo.jpeg';
import sjslogo from '/public/images/education/sjs.jpeg';
import salimg from '/public/images/education/salesian.jpeg';
import sseImg from '/public/images/education/sse.jpeg';

export const allEducation: { [key: string]: EducationProps } = {
	smsslg: {
		fromDate: '2015',
		toDate: '2018',
		orgName: "St. Michael's School",
		orgLocation: 'Siliguri, India',
		imageURL: smsslgImg,
		url: 'https://smsslg.com/',
		description: `

### Percentage
94%

`,
	},
	sjhsm: {
		fromDate: '2018',
		toDate: '2020',
		orgName: 'St. Josephs High School',
		orgLocation: 'Siliguri, India',
		imageURL: sjslogo,
		url: 'https://sjhsm.in/',
		description: `

### Percentage
93.5%

`,
	},
	salesian: {
		fromDate: '2020',
		toDate: '2023',
		orgName: 'Salesian College',
		orgLocation: 'Siliguri, India',
		imageURL: salimg,
		url: 'https://salesiancollege.ac.in/',
		description: `

### CGPA
9.2 / 10.0

`,
	},
	symbiosis: {
		fromDate: '2023',
		toDate: 'Present',
		orgName: 'Symbiosis School Of Economics',
		orgLocation: 'Pune, India',
		imageURL: sseImg,
		url: 'https://www.sse.ac.in/',
		description: `
I am a final-year Msc.Economics postgrad majoring in Data Analytics.

### Year of Graduation
2025

### CGPA
8.27 / 10.0

### Academics courses
- Python for Data Science
- Data Mining and EDA
- Big Data
- Financial Analytics
- Econometrics
- Micro and Macroeconomics
`,
	},
};
