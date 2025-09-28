
import {DropFirst, ob} from "@e280/stz"
import {spa, View, ViewProps} from "@e280/sly"
import {Cellar, OpfsForklift} from "@e280/quay"

import {Strata} from "./strata.js"
import {Lol} from "../dom/views/lol/view.js"
import {Nav} from "../dom/views/nav/view.js"
import {AboutPage} from "../pages/about/view.js"
import {CargoController} from "./controllers/cargo.js"
import {UnknownPage} from "../pages/unknown/view.js"
import {AccountPage} from "../pages/account/view.js"
import {ProjectsPage} from "../pages/projects/view.js"
import {getOmniMedia} from "../dom/components/omni-media/element.js"

export class EditorContext {
	static async setup() {
		const requirements = await setupRequirements()
		return new this(requirements)
	}

	constructor(private requirements: Requirements) {}

	get strata() {
		return this.requirements.strata
	}

	get controllers() {
		return this.requirements.controllers
	}

	router = new spa.Router({
		routes: {
			home: spa.route("#/", async() => AboutPage(this)),
			account: spa.route("#/account", async() => AccountPage(this)),
			projects: spa.route("#/projects", async() => ProjectsPage(this)),
		},
		notFound: async() => UnknownPage(),
	})

	views = (() => {
		const views = {Nav, Lol}
		return ob(views).map(v => v.transmute((...p: any[]) => [this, ...p] as any)) as {
			[K in keyof typeof views]: View<DropFirst<ViewProps<(typeof views)[K]>>>
		}
	})()

	getElements = () => ({
		OmniMedia: getOmniMedia(this),
	})
}

type Requirements = Awaited<ReturnType<typeof setupRequirements>>

async function setupRequirements() {
	const strata = new Strata()
	const forklift = await OpfsForklift.setup("files")
	const cellar = new Cellar(forklift)
	const controllers = {
		cargo: new CargoController(strata, cellar),
	}
	return {strata, controllers}
}

