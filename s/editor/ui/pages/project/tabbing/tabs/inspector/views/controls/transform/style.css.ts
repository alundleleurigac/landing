import {css} from "lit"

export default css`

.transform-controls {
	display: flex;
	flex-direction: column;
	gap: 0.8em;
}

.control-row {
	display: flex;
	align-items: center;
	gap: 1em;
}

label {
	flex-basis: 55px;
	flex-shrink: 0;
	font-size: 0.9em;
	color: #ccc;
	text-align: left;
}

.inputs {
	display: flex;
	gap: 0.5em;
	flex-grow: 1;
}

.input-group {
	display: flex;
	align-items: center;
	background: #1f1f1f;
	border: 1px solid #333;
	border-radius: 5px;
	overflow: hidden;
	flex: 1;
}

input[type="number"] {
	width: 100%;
	background: transparent;
	border: none;
	color: white;
	padding: 0.5em;
	text-align: center;
	-moz-appearance: textfield; /* Firefox */
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

.prefix, .suffix {
	padding: 0 0.6em;
	background: #2a2a2a;
	color: #888;
	font-weight: bold;
	font-size: 0.8em;
	display: flex;
	align-items: center;
	justify-content: center;
}

.prefix svg {
	width: 1em;
	height: 1em;
	fill: currentColor;
}

.suffix {
	border-left: 1px solid #333;
}

.prefix {
	border-right: 1px solid #333;
}
`
