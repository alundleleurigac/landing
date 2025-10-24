import {css} from "lit"

export default css`

.panel {
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
	width: 100%;
	max-width: 600px;
}

.create-styles {
	display: flex;
	gap: 0.5em;
}

.disabled {
	opacity: 0.5;
	pointer-events: none;

	.info {
		padding: 1em;
    color: #888;
    font-style: italic;
    text-align: center;
	}
}

details {
	background: #1a1a1a;
	border-radius: 8px;
	box-shadow: 0 0 5px #0008;
	overflow: hidden;
}

summary {
	cursor: pointer;
	background: #232323;
	color: #9cf;
	padding: 0.6rem 0.9rem;
	font-weight: 600;
	user-select: none;
	outline: none;
}

summary::marker {
	color: #888;
}

details[open] summary {
	border-bottom: 1px solid #333;
}

.cnt {
	padding: 0.8rem 1rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

[data-enabled=false] {
	opacity: 0.5;
}

label {
	font-size: 0.9rem;
	opacity: 0.8;
}

input,
select,
button {
	background: #222;
	color: #eee;
	border: 1px solid #444;
	padding: 0.3rem 0.4rem;
	border-radius: 4px;
	font-size: 0.9rem;
}

button {
	cursor: pointer;
	transition: 0.15s;
}

button:hover {
	background: #333;
}

.flex {
	display: flex;
	align-items: center;
	gap: 0.3rem;
}
`

