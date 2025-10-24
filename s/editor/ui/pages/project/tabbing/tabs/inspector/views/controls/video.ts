
import {html} from "lit"
import {view} from "@e280/sly"
import {Item} from "@omnimedia/omnitool"

import {CropControls} from "./crop/view.js"
import {sectionStyles} from "./styles.css.js"
import {TransformControls} from "./transform/view.js"
import {CompositingControls} from "./compositing/view.js"
import {EditorContext} from "../../../../../../../../context/context.js"

export const VideoControls = view(use => (context: EditorContext, item: Item.Video) => {
	use.styles(sectionStyles)

	return html`
		<div class="controls-group">
			<h4 class="heading">Transform</h4>
			${TransformControls(context, item)}
		</div>
		<div class="controls-group">
			<h4 class="heading">Crop</h4>
			${CropControls(context, item)}
		</div>
		<div class="controls-group">
			<h4 class="heading">Compositing</h4>
			${CompositingControls(context, item as Item.Video)}
		</div>
	`
})
