import { Response } from "../interfaces/response";

export function getPreso(responses : Response[]) : number {
	let total = 0;
	responses.forEach((item) => {
		if(item.preso) {
			total++;
		}
	});
	return total;
}