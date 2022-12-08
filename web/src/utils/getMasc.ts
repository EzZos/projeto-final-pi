import { Response } from "../interfaces/response";

export function getMasc(responses: Response[]) : number {
	let total = 0;
	const masculino = responses.filter((item) => item.genero == "Masculino");
	const cases = masculino.map((item) => {
		const values = Object.values(item);
		return values.filter((item) => item == true).length;
	});
	cases.forEach((item) => total += item);
	return total;
}