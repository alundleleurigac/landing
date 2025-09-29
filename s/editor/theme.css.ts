
import {css} from "lit"
export default css`@layer theme, view; @layer theme {

* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: #333; border-radius: 1em; }
::-webkit-scrollbar-thumb:hover { background: #444; }

a {
	color: var(--link);
	text-decoration: none;

	&:visited {
		color: color-mix(in srgb, purple, var(--link) 70%);
	}

	&:hover {
		color: color-mix(in srgb, white, var(--link) 90%);
		text-decoration: underline;
	}

	&:active {
		color: color-mix(in srgb, white, var(--link) 50%);
	}
}

[theme="topper"] {
	height: 3em;
	width: 100%;
	background: #fff1;
}

[theme="paddy"] {
	padding: 1em;
}

[theme="mid"] {
	flex: 1 1 auto;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	gap: 0.5em;
	padding: 1em;
}

}`

