import { Response } from "../interfaces/response";

export function getCensura(responses : Response[]) : number {
	let total = 0;
	responses.forEach((item) => {
		if(item.censura) {
			total++;
		}
	});
	return total;
}