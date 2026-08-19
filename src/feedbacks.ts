import type ModuleInstance from './main.js'

export type FeedbacksSchema = {
	connection_status: {
		type: 'boolean'
		options: Record<string, never>
	}
}

export function UpdateFeedbacks(self: ModuleInstance): void {
	self.setFeedbackDefinitions({
		connection_status: {
			name: 'Connection Status',
			type: 'boolean',
			defaultStyle: {
				bgcolor: 0x00ff00,
				color: 0x000000,
			},
			options: [],
			callback: () => {
				return self.isConnected
			},
		},
	})
}
