import React from 'react';
import _ from './style.module.css';
import Icon_arrow from '../../icons/arrow-down.svg';
import Icon_download from '../../icons/download.svg';

interface selectProps {
	label?: string,
	options: string[]
}

export const Select = (props:selectProps) => {
	const [open , toggle] = React.useState(false),
				[active, change] = React.useState(props.options[0]);
				
	return (
		<div className={`${_.select} ${open ? _.selectOpen : ''} ${!props.label ? _.unlabeled : ''}`} onClick={() => toggle(!open)}>
			{props.label && <label>{props.label}</label>}
			<span>{active}</span>
			<Icon_arrow />
			<ul>
				{props.options.map((option, k) => <li key={k} onClick={() => change(option)}>{option}</li>)}
			</ul>
		</div>
	);
}

interface buttonProps {
	label: string
}

export const Button = (props: buttonProps) => (
	<button className={_.btn}>
		{props.label}
		<Icon_download />
	</button>
)