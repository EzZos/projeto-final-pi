import { Response } from "../interfaces/response";

export function getMenor(responses: Response[]): number {
	let total = 0;
	const menor = responses.filter((item) => item.idade < 18);
	const cases = menor.map((item) => {
		const values = Object.values(item);
		return values.filter((item) => item == true).length;
	});
	cases.forEach((item) => (total += item));
	return total;
}
