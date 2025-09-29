
import {shiny, themes, ShinyViews} from "@e280/shiny"
import {EditorContext} from "../context.js"
import {Lol} from "../../dom/views/lol/view.js"
import {Nav} from "../../dom/views/nav/view.js"
import {provide} from "../../../tools/provide.js"
import {TabBar} from "../../dom/views/tab-bar/view.js"
import {EditorApp} from "../../dom/views/editor-app/view.js"

export const shinyViews = shiny({theme: themes.basic}).views

export const editorViews = {
	Nav,
	Lol,
	TabBar,
	EditorApp,
}

export const prepareViews = (context: EditorContext) => ({
	...shinyViews,
	...provide(context, editorViews),
} as {[K in keyof typeof editorViews]: ReturnType<(typeof editorViews)[K]>} & ShinyViews)

