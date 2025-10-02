
import {Chronicle, Trunk} from "@e280/strata"

export type State = {
	files: {
		hashes: string[]
	}
	chron: Chronicle<{
		timeline: {}
	}>
	settings: {
		timebase: number
		zoom: number
		resolution: {
			width: number
			height: number
		}
	}
}

export class Strata {
	trunk = new Trunk<State>({
		files: {
			hashes: [],
		},
		chron: Trunk.chronicle({
			timeline: {},
		}),
		settings: {
			timebase: 30,
			zoom: 1,
			resolution: {
				width: 1920,
				height: 1080
			}
		}
	})

	settings = this.trunk.branch(s => s.settings)
	files = this.trunk.branch(s => s.files)
	timeline = this.trunk.chronobranch(64, s => s.chron)
}

