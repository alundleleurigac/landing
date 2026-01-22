import {AnyEffect} from "../../../context/types.js"

export function calculate_effect_width(effect: AnyEffect, zoom: number) {
	if ("duration" in effect) {
		return (effect.duration) * Math.pow(2, zoom)
	}
	return (effect.end - effect.start) * Math.pow(2, zoom)
}
