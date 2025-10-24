import {html} from 'lit'
import {view} from '@e280/sly'
import {Item} from '@omnimedia/omnitool'
import {Transform} from '@omnimedia/omnitool/x/timeline/types.js'

import styleCss from './style.css.js'
import {EditorContext} from '../../../../../../../../../context/context.js'
import rotateSvg from '../../../../../../../../icons/material-design-icons/rotate.svg.js'

const DEFAULT_TRANSFORM: Transform = [
	[0, 0],
	[1, 1],
	0
]

export const TransformControls = view(use => (context: EditorContext, item: Item.Text | Item.Video) => {
	use.styles(styleCss)

	const tool = context.omni
	const spatial = tool.require<Item.Spatial>(item.spatialId)
	const [position, scale, rotation] = spatial?.transform ?? DEFAULT_TRANSFORM

	const updateTransform = (next: Transform) => {
		const current = tool.require<Item.Spatial>(item.spatialId)
		if (!current) {
			const created = tool.spatial(next)
			tool.set(item.id, {spatialId: created.id})
		} else {
			tool.set<Item.Spatial>(current.id, {transform: next})
		}
	}

	return html`
		<div class="transform-controls">
			<div class="control-row">
				<label>Position</label>
				<div class="inputs">
					<div class="input-group">
						<span class="prefix">X</span>
						<input
							type="number"
							.value=${position[0]}
							@input=${(e: InputEvent) =>
								updateTransform([[Number((e.target as HTMLInputElement).value), position[1]], scale, rotation])}
						>
					</div>
					<div class="input-group">
						<span class="prefix">Y</span>
						<input
							type="number"
							.value=${position[1]}
							@input=${(e: InputEvent) =>
								updateTransform([[position[0], Number((e.target as HTMLInputElement).value)], scale, rotation])}
						>
					</div>
				</div>
			</div>

			<div class="control-row">
				<label>Scale</label>
				<div class="inputs">
					<div class="input-group">
						<span class="prefix">X</span>
						<input
							type="number"
							step="0.01"
							.value=${scale[0]}
							@input=${(e: InputEvent) =>
								updateTransform([position, [Number((e.target as HTMLInputElement).value), scale[1]], rotation])}
						>
					</div>
					<div class="input-group">
						<span class="prefix">Y</span>
						<input
							type="number"
							step="0.01"
							.value=${scale[1]}
							@input=${(e: InputEvent) =>
								updateTransform([position, [scale[0], Number((e.target as HTMLInputElement).value)], rotation])}
						>
					</div>
				</div>
			</div>

			<div class="control-row">
				<label>Rotation</label>
				<div class="inputs">
					<div class="input-group">
						<span class="prefix">${rotateSvg}</span>
						<input
							type="number"
							.value=${rotation}
							@input=${(e: InputEvent) =>
								updateTransform([position, scale, Number((e.target as HTMLInputElement).value)])}
						>
						<span class="suffix">°</span>
					</div>
				</div>
			</div>
		</div>
	`
})
