
import {html} from "lit"
import {view} from "@e280/sly"

import styleCss from "./style.css.js"
import themeCss from "../../../theme.css.js"
import {EditorContext} from "../../../context/context.js"

export const getLolView = (context: EditorContext) => view(use => () => {
	use.styles(themeCss, styleCss)

	return html`lol`
})

