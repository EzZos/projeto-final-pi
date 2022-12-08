import { Response } from "../interfaces/response";

export function getAtentado(responses : Response[]) : number {
	let total = 0;
	responses.forEach((item) => {
		if(item.atentado) {
			total++;
		}
	});
	return total;
}