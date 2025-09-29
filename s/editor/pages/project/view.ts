
import {css, html} from "lit"
import {view} from "@e280/sly"
import {EditorContext} from "../../context/context.js"

export const ProjectPage = (context: EditorContext) => view(use => (projectId: string) => {
	use.styles(css`
		:host {
			display: flex;
			flex-direction: column;
			height: 100%;
			min-height: 0;
		}
		.app {
			flex: 1;
			min-height: 0;
		}
	`)

	// // TODO
	// const App = context.views2.EditorApp(projectId)
	//
	// return html`<div class="app">${App}</div>`
})

