
import {ob} from "@e280/stz"

export function provide<
		X,
		Fns extends Record<string, (x: X) => any>
	>(x: X, fns: Fns) {

	return ob(fns).map(fn => fn(x)) as {
		[K in keyof Fns]: ReturnType<Fns[K]>
	}
}

