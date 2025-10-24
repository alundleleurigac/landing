import {html} from "lit"
import {view} from "@e280/sly"

import styleCss from "./style.css.js"
import {TabBar} from "./tabbing/bar/view.js"
import themeCss from "../../../theme.css.js"
import {TabManager} from "./tabbing/tab-manager.js"
import {EditTab} from "./tabbing/tabs/edit/view.js"
import {ExportTab} from "./tabbing/tabs/export/view.js"
import {EditorContext} from "../../../context/context.js"
import {InspectorTab} from "./tabbing/tabs/inspector/view.js"
import {OutlinerTab} from "./tabbing/tabs/outliner/view.js"
import {TimelineViewport} from "./tabbing/tabs/edit/views/viewport/view.js"

export const ProjectPage = (context: EditorContext) => view(use => (projectId: string) => {
	use.styles(themeCss, styleCss)
	use.mount(() => () => context.dispose())

	const manager = use.once(() => new TabManager())
	const isEditActive = manager.activeTabId.value === "edit"

	return html`
		<div class="project-page">
			<header theme=topper>
				<div class=tab-bar>
					${TabBar(manager)}
				</div>
			</header>

			<p>editing project: ${projectId}</p>

			<div class="layout-grid">
				<div
					class="panel outliner-panel"
					?data-active=${manager.activeTabId.value === "outliner"}
				>
					${OutlinerTab(context)}
				</div>

				<div
					class="panel viewport-panel"
					?data-active=${isEditActive}
				>
					${TimelineViewport(context)}
				</div>

				<div
					class="panel inspector-panel"
					?data-active=${manager.activeTabId.value === "inspector"}
				>
					${InspectorTab(context)}
				</div>

				<div
					class="panel timeline-panel"
					?data-active=${isEditActive}
				>
					${EditTab(context)}
				</div>

				<div
					class="panel export-panel"
					?data-active=${manager.activeTabId.value === "export"}
				>
					${ExportTab(context)}
				</div>
			</div>
		</div>
	`
})
