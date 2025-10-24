
import {html} from "lit"
import {view} from "@e280/sly"
import {Item} from "@omnimedia/omnitool"

import {sectionStyles} from "./styles.css.js"
import {EditorContext} from "../../../../../../../../context/context.js"

export const InfoControls = view(use => (context: EditorContext, item: Item.Any) => {
	use.styles(sectionStyles)

	return html`
		<div class="controls-group">
			<h4 class="heading">File Info</h4>
			<p>Metadata (FPS, resolution, etc.) for item ${item.id} will go here.</p>
		</div>
	`
})
