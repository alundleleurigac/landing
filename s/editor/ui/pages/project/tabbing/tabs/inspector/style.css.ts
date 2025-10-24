import {css} from "lit"

export default css`@layer view {

:host {
	display: flex;
	flex-direction: column;
	height: 100%;
}

.placeholder {
	padding: 1em;
	color: #888;
	font-style: italic;
	text-align: center;
	margin-top: 2em;
}

.inspector {
	display: flex;
	flex-direction: column;
	height: 100%;
}

.tab-bar {
	display: flex;
	flex-shrink: 0;
	background: #222;
	border-bottom: 1px solid #1a1a1a;
	padding: 0.3em;
	gap: 0.3em;
}

.tab-button {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.5em;
	height: 2.5em;
	background: transparent;
	border: none;
	color: #aaa;
	border-radius: 0.4em;
	cursor: pointer;
	transition: background 0.2s ease, color 0.2s ease;
}

.tab-button:hover {
	background: #333;
	color: white;
}

.tab-button[data-active] {
	background: #444;
	color: white;
}

.tab-button svg {
	width: 1.2em;
	height: 1.2em;
}

.panel-content {
	flex: 1;
	overflow-y: auto;
	padding: 1em;
}

}`

