import { CertificateProps } from 'utils/developerStory';
import couImg from '/public/images/certificates/coulog.png';
export const allCertificates: { [key: string]: CertificateProps } = {
	coulog1: {
		fromDate: 'June 2024',
		toDate: 'June 2024',
		title: 'Text Mining Using Applied Python',
		url: 'https://www.coursera.org/account/accomplishments/verify/CVPWQ6NXXPAV',
		imageURL: couImg,
		description: `
The Applied Text Mining in Python course focused on using Python to extract and analyze text data. 
I developed skills in text processing, tokenization, and using natural language processing (NLP) libraries like NLTK and Scikit-learn. 
I learned how to implement sentiment analysis, topic modeling, and build machine learning models to extract meaningful insights from text data.
`,
		// skills: ['Python', 'Text Mining'],
		orgName: 'Coursera',
	},
	coulog2: {
		fromDate: 'June 2024',
		toDate: 'June 2024',
		title: 'Social Media Data Analytics',
		url: 'https://www.coursera.org/account/accomplishments/verify/PTHDCZTYDYPD',
		imageURL: couImg,
		description: `

In this Social Media Data Analytics Certification, I gained skills to analyze and interpret social media data, focusing on techniques like sentiment analysis, engagement metrics, and predictive modeling. 
The course equipped me to visualize trends and make data-driven decisions, ideal for enhancing business strategies or conducting research.
`,
		// skills: ['Data Analysis','R'],
		orgName: 'Coursera',
	},
	};
