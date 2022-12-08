import { Response } from "../interfaces/response";

export function getAssociacao(responses : Response[]) : number {
	let total = 0;
	responses.forEach((item) => {
		if(item.associacao) {
			total++;
		}
	});
	return total;
}