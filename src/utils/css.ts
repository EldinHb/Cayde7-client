export const css = (...args: (string | undefined)[]): string => {
	return args.filter((x): x is string => !!x).reduce((prev, curr) => prev + ' ' + curr, '');
}