import { Response } from "../interfaces/response";

export function getFurtado(responses : Response[]) : number {
	let total = 0;
	responses.forEach((item) => {
		if(item.furtado) {
			total++;
		}
	});
	return total;
}