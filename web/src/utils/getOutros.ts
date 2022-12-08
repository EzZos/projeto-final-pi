import { Response } from "../interfaces/response";

export function getOutros(responses: Response[]) : number {
	let total = 0;
	const outros = responses.filter((item) => item.genero == "Outros");
	const cases = outros.map((item) => {
		const values = Object.values(item);
		return values.filter((item) => item == true).length;
	});
	cases.forEach((item) => total += item);
	return total;
}