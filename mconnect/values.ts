import { serverConfig } from "server/values";

export const defaultConfig = {
	'online-mode': false, // optional
	encryption: false, // optional
	host: '0.0.0.0', // optional
	port: 25565, // optional
	version: '1.16.1',
	motd: serverConfig.motd,
	maxPlayers: serverConfig.maxplayers,
};


export const defaultWorldData = {
	piglin_safe: {
		type: 'byte',
		value: 0,
	},
	natural: {
		type: 'byte',
		value: 1,
	},
	ambient_light: {
		type: 'float',
		value: 0,
	},
	infiniburn: {
		type: 'string',
		value: 'minecraft:infiniburn_overworld',
	},
	respawn_anchor_works: {
		type: 'byte',
		value: 0,
	},
	has_skylight: {
		type: 'byte',
		value: 1,
	},
	bed_works: {
		type: 'byte',
		value: 1,
	},
	has_raids: {
		type: 'byte',
		value: 1,
	},
	name: {
		type: 'string',
		value: 'minecraft:overworld',
	},
	logical_height: {
		type: 'int',
		value: 256,
	},
	shrunk: {
		type: 'byte',
		value: 0,
	},
	ultrawarm: {
		type: 'byte',
		value: 0,
	},
	has_ceiling: {
		type: 'byte',
		value: 0,
	},
};
