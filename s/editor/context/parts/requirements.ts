
import {Cellar, OpfsForklift} from "@e280/quay"
import {Strata} from "./strata.js"
import {TabManager} from "../controllers/input/tabs.js"
import {CargoController} from "../controllers/cargo.js"
import {Keybindings} from "../controllers/input/keybindings.js"

export type Requirements = Awaited<ReturnType<typeof setupRequirements>>

export async function setupRequirements() {
	const strata = new Strata()
	const tabs = new TabManager()
	const keybindings = await Keybindings.setup(tabs)
	const forklift = await OpfsForklift.setup("files")
	const cellar = new Cellar(forklift)
	const controllers = {
		cargo: new CargoController(strata, cellar),
	}
	return {strata, controllers, tabs, keybindings}
}

