import React from 'react';
import './About.css';

export default function About() {
	return (
		<div>
			<header id="about-header">
				<h1>About</h1>
			</header>

			<section id="description" className="about-section">
				<h3>Description</h3>
				<p>
					Bay Area Covid-19 Tracker is a submission for <a href="https://hackquarantine.com/" rel="noopener noreferrer" target="_blank">HackQuarantine</a>.
					It is a simple, open-source website that allows visitors to view the impact of Covid-19 on counties in the greater San Francisco, Bay Area, California. 
				</p>
			</section>

			<section id="word-from-the-developer" className="about-section">
				<h3>A Word from the Developer</h3>
				<p>
					Thank you to the organizers of HackQuarantine and all the participants. I am grateful to have been apart of something that can help during this pandemic
					even if the greater contribution is small. We all did our part in making the most out of this situation and to build systems and/or applications that could
					help many people whether they have been affected by Covid-19 or not. These are not easy times, but it was inspirational to see everyone wanting to do
					their part. To the organizers, you guys are awesome! Without you, this wouldn't have been possible. Because of you, we are able to have some sort of impact
					during this crisis. To all the participants, we did it! Good job to everyone and you are an inspiration to me. 
				</p>
				<p>
					<strong>
						A special thank you to all the healthcare, police, firemen, grocery and warehouse, maintenance, and all other workers that have to be out in the field.
						YOU ARE THE REAL HEROS.
					</strong>
					These are the people that are putting their lives on the line. Making sure those who are infected get the treatment that they need, provide us with the essentials
					such as food and <em>toilet paper</em>, cleaning our communities, and enforcing social distancing so we all stay as safe as we can from this virus. There are not
					enough words to express how grateful we are to you. You all have gone above and beyond what you need to do for all of us to have what we need, and combat Covid-19.
					We will always be thankful for your efforts during this pandemic.
				</p>
			</section>
			<div>
				<p>The repository for Bay Area Covid-19 Tracker can be found <a href="https://github.com/Bay-Area-Covid-Tracker" rel="noopener noreferrer" target="_blank">here.</a></p>
			</div>
		</div>
	);
}
