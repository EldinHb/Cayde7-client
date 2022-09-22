export class Env {
	public static get ApiUrl(): string {
		return this.getEnvVar('API_URL');
	}

	public static getEnvVar(name: string): string {
		const envVar = process.env[name];

		if (!envVar) {
			throw Error('could not find env var: ' + name);
		}

		return envVar;
	}
}