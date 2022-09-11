export const colors = [
	'darkBlue',
	'darkBlueContrast',
	'primaryDark',
	'primary',
	'gold',
	'lightGray',
] as const;

export type Color = typeof colors[number];

type RGB = {
	r: number;
	g: number;
	b: number;
}

export const hexToRgb = (hex: string): RGB => {
	const m = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);

	if (!m) {
		return {
			r: 0,
			g: 0,
			b: 0
		}
	}

	return {
		r: parseInt(m[1], 16),
		g: parseInt(m[2], 16),
		b: parseInt(m[3], 16)
	};
}