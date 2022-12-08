import { Response } from "../interfaces/response";

export function getTotal(responses : Response[]) : number {
	let total = 0;
	const cases = responses.map((item) => {
		const values = Object.values(item);
		return values.filter((value) => value === true).length;
	});
	cases.forEach((item) => total += item);
	return total;
}