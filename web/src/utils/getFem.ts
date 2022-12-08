import { Response } from "../interfaces/response";

export function getFem(responses: Response[]) : number {
	let total = 0;
	const feminino = responses.filter((item) => item.genero == "Feminino");
	const cases = feminino.map((item) => {
		const values = Object.values(item);
		return values.filter((item) => item == true).length;
	});
	cases.forEach((item) => total += item);
	return total;
}