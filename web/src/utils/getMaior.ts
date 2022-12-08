import { Response } from "../interfaces/response";

export function getMaior(responses: Response[]): number {
	let total = 0;
	const maior = responses.filter((item) => item.idade >= 18);
	const cases = maior.map((item) => {
		const values = Object.values(item);
		return values.filter((item) => item == true).length;
	});
	cases.forEach((item) => (total += item));
	return total;
}