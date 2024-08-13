import Story from 'components/Story';
import Head from 'next/head';
import React from 'react';

export default function story() {
	return (
		<>
			<Head>
				<title>Aisharriya | Developer Story</title>
				<meta
					name='description'
					content='From "Hello World" to deploying production code, the developer journey is a never-ending quest for knowledge, efficiency, and innovation.'
				/>
				<meta
					name='keywords'
					content='developer story, developer journey, developer story Aisharriya, Aisharriya developer story, Aisharriya dev'
				/>
				<meta
					name='author'
					content='Aisharriya | https://nimish-jain.com'
				/>
			</Head>
			<Story />
		</>
	);
}
