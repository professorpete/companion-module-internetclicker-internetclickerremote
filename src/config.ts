import { type SomeCompanionConfigField } from '@companion-module/base'

export type ModuleConfig = {
	code: string
}

export function GetConfigFields(): SomeCompanionConfigField[] {
	return [
		{
			type: 'textinput',
			id: 'code',
			label: 'Event Code',
			width: 12,
		},
	]
}
