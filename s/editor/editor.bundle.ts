
import {dom} from "@e280/sly"
import {Salad} from "@e280/lettuce"

import {EditorContext} from "./context/context.js"
import {getAboutPanel} from "./dom/panels/about/panel.js"
import {getUnknownPanel} from "./dom/panels/unknown/panel.js"

const context = await EditorContext.setup()

// register omniclip components to the dom
dom.register(context.getElements())

// setup lettuce layout system
Salad
	.panels(() => ({
		AboutPanel: getAboutPanel(context),
		UnknownPanel: getUnknownPanel(context),
	}))
	.layout(layman => ({
		empty: layman.single("AboutPanel"),
		default: layman.single("AboutPanel"),
	}))
	.setup()

