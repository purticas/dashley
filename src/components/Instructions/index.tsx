import React from "react";
import _ from "./style.module.css";
import Icon_receipt from '../../icons/receipt.svg';

export default () => (
	<article className={_.instructions}>
		<div className={_.head}>
			<h2>
				<Icon_receipt />
				Instructions
			</h2>
		</div>
		<div className={_.body}>
			<p>
				You can find the code for the project on my <a href='https://github.com/SebastianOpperman/dashley'>GitHub account</a>. I have set up this project using only webpack and React with TypeScript. This is to showcase my tooling skills. For actual production project I would use tools such as <em>Create React App</em> and <em>Next.js</em>. Using those boilerplates, i can implement the same features as this demo.
			</p>
			<p>
				You can try this demo by cloning it from the repo, and running the following commands:
			</p>
			<ol>
				<li>Run <code>npm run install</code> to install dependancies.</li>
				<li>Run <code>yarn dev</code> to start the development mode.</li>
				<li>Run <code>yarn build</code> to build a dist copy for production.</li>
			</ol>
		</div>
	</article>
);
