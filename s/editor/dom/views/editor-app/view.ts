
import {html, css} from 'lit'
import {view} from '@e280/sly'

import {TimelineTab} from '../../tabs/timeline/view.js'
import {OutlinerTab} from '../../tabs/outliner/view.js'
import {EditorContext} from '../../../context/context.js'

export const EditorApp = (context: EditorContext) => view(use => (projectId: string) => {
	use.styles(css`
		:host {
			display: flex;
			flex-direction: column;
			flex: 1;
		}
		.tab-content {
			flex: 1;
			overflow: auto;
		}
	`)

	use.mount(() => () => context.dispose())

	const manager = context.tabs
	const TabBarView = context.views.TabBar()

	const renderActiveTab = () => {
		switch (manager.activeTabId.value) {
			case "timeline": return TimelineTab()
			case "outliner": return OutlinerTab()
			default: return html`<p>Unknown tab</p>`
		}
	}

	return html`
		<p>editing project: ${projectId}</p>
		${TabBarView}
		<div class="tab-content">
			${renderActiveTab()}
		</div>
	`
})

