import React from 'react';
import { Link } from 'react-router-dom';

import logoLinkedin from '../assets/images/logo_linkedin.png';

export default function NotFound() {
	return (
		<div className="h-screen flex items-center flex-col justify-center">
			<div className="overflow-hidden">
				<Link to="/">
					<img
						className=" max-w-xs p-3 transform animate-goup"
						src={logoLinkedin}
						alt="linkedin logo"
					/>
				</Link>
			</div>
			<div className="max-w-xs h-16 border-t-2 flex justify-center items-center overflow-hidden">
				<h1 className="font-medium text-blue-800 text-center transform animate-godown">
					404 Not Found page
				</h1>
			</div>
		</div>
	);
}
