import React, { FC } from "react";

type NestedProps = {};

export const Nested: FC<NestedProps> = () => {
	// function greeting(name) {
	// 	alert("Hello " + name);
	// }

	// function processUserInput(callback) {
	// 	var name = prompt("Please enter your name.");
	// 	callback(name);
	// }

	// processUserInput(greeting);
	const base = (a: number, b: number) => {
		return a + b;
	};
	const handleBase = () => {
		return base(5, 6);
	};
	console.log(handleBase());

	const babble = (d: string) => {
		return d;
	};

	const boost = (a: string) => {
		return a;
	};

	const lag = (a: string) => {
		return `${a} ${boost("rain")}`;
	};

	console.log(lag("dynamic"));

	const latency = (frames: (k: string) => void) => {
		return frames;
	};

	const monitor = (k: string) => {
		return latency(boost) + k;
	};
	console.log(monitor("blocked"));

	return (
		<div>
			<h1>HeyLo</h1>
		</div>
	);
};
