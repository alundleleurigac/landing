import { html } from "@benev/slate"
import { VideoEffect } from "../../../../context/types.js"
import { Actions } from "../../../../context/actions.js"
import { light_view } from "../../../../context/context.js"

export const SpeedControl = light_view(use => (selected_effect: VideoEffect | null | undefined, actions: Actions) => {
	const [pendingSpeed, setPendingSpeed] = use.state<number | null>(null)

	const [lastEffectId, setLastEffectId] = use.state<string | undefined>(undefined)

	if (selected_effect?.id !== lastEffectId) {
		setLastEffectId(selected_effect?.id)
		setPendingSpeed(null)
	}

	use.mount(() => {
		return () => { }
	})

	if (!selected_effect || selected_effect.kind !== "video")
		return html``

	const currentSpeed = selected_effect.speed ?? 1
	const speed = pendingSpeed ?? currentSpeed

	const apply_speed = () => {
		if (pendingSpeed !== null && pendingSpeed !== currentSpeed) {
			actions.set_effect_speed(selected_effect, pendingSpeed)
			setPendingSpeed(null)
		}
	}

	return html`
		<style>
			.speed-control {
				display: flex;
				align-items: center;
				gap: 0.5em;
				margin-left: 1em;
				border-left: 1px solid #333;
				padding-left: 1em;
			}
			.speed-control button {
				background: #222;
				border: 1px solid #444;
				color: #ccc;
				cursor: pointer;
				padding: 0.2em 0.5em;
				border-radius: 4px;
				font-size: 0.8em;
			}
			.speed-control button:hover {
				background: #333;
			}
			.speed-control button.active {
				background: #555;
				color: white;
				border-color: #666;
			}
			.speed-control button.apply {
				background: #007acc;
				color: white;
				border-color: #0099ff;
			}
			.speed-control input {
				background: #222;
				border: 1px solid #444;
				color: #ccc;
				width: 40px;
				padding: 0.2em;
				border-radius: 4px;
				font-size: 0.8em;
				text-align: center;
			}
		</style>
		<div class="speed-control">
			<span>Speed:</span>
			${[0.5, 1, 2, 4, 8].map(s => html`
				<button
					class=${speed === s ? "active" : ""}
					@click=${() => setPendingSpeed(s)}
				>
					${s}x
				</button>
			`)}
			<input
				type="number"
				.value=${speed}
				@change=${(e: Event) => setPendingSpeed(parseFloat((e.target as HTMLInputElement).value))}
				step="0.1"
				min="0.1"
			/>
			${pendingSpeed !== null && pendingSpeed !== currentSpeed ? html`
				<button class="apply" @click=${apply_speed}>Apply</button>
			` : null}
		</div>
	`
})
