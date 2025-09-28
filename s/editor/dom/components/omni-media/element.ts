
import {html} from "lit"
import {view} from "@e280/sly"

import styleCss from "./style.css.js"
import themeCss from "../../../theme.css.js"
import {EditorContext} from "../../../context/context.js"

export const getOmniMedia = (context: EditorContext) => view.component(use => {
	use.styles(themeCss, styleCss)
	const {Lol} = context.views

	return html`
		<p>omni media</p>
		${Lol()}
	`
})

