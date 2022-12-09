import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { Form } from "./components/Form";
import { TabelaRespostas } from "./components/TabelaRespostas";
import { Pesquisa } from "./components/Pesquisa";
import { Statistics } from "./components/Statistics";

import { Response } from "./interfaces/response";
import { StatsInterface } from "./interfaces/statistics";

import { getTotal } from "./utils/getTotal";
import { getPreso } from "./utils/getPreso";
import { getCensura } from "./utils/getCensura";
import { getAssociacao } from "./utils/getAssociacao";
import { getFurtado } from "./utils/getFurtado";
import { getAtentado } from "./utils/getAtentado";
import { getFem } from "./utils/getFem";
import { getMasc } from "./utils/getMasc";
import { getMenor } from "./utils/getMenor";
import { getOutros } from "./utils/getOutros";
import { getMaior } from "./utils/getMaior";

import "./styles/global.css";

const tabs: string[] = [
	"Responder pesquisa",
	"Ver respostas",
	"Procurar resposta",
	"Ver estatísticas",
];

export function App() {
	const [responses, setResponses] = useState<Response[]>([]);
	const [stats, setStats] = useState<StatsInterface>({
		totalGeral: 0,
		totalPreso: 0,
		totalCensura: 0,
		totalAssociacao: 0,
		totalFurtado: 0,
		totalAtentado: 0,
		totalFem: 0,
		totalMasc: 0,
		totalOutros: 0,
		totalMenor: 0,
		totalMaior: 0,
	});

	function getResponses() {
		fetch("http://localhost:3333/responses")
			.then((response) => response.json())
			.then((data) => setResponses(data));

		setStats({
			totalGeral: getTotal(responses),
			totalPreso: getPreso(responses),
			totalCensura: getCensura(responses),
			totalAssociacao: getAssociacao(responses),
			totalFurtado: getFurtado(responses),
			totalAtentado: getAtentado(responses),
			totalFem: getFem(responses),
			totalMasc: getMasc(responses),
			totalOutros: getOutros(responses),
			totalMenor: getMenor(responses),
			totalMaior: getMaior(responses),
		});
	}

	useEffect(() => {
		fetch("http://localhost:3333/responses")
			.then((response) => response.json())
			.then((data) => setResponses(data));
		setStats({
			totalGeral: getTotal(responses),
			totalPreso: getPreso(responses),
			totalCensura: getCensura(responses),
			totalAssociacao: getAssociacao(responses),
			totalFurtado: getFurtado(responses),
			totalAtentado: getAtentado(responses),
			totalFem: getFem(responses),
			totalMasc: getMasc(responses),
			totalOutros: getOutros(responses),
			totalMenor: getMenor(responses),
			totalMaior: getMaior(responses),
		});
	}, []);

	return (
		<Tab.Group>
			<Tab.List className="w-full flex justify-center gap-9 px-14 py-3 bg-green-300/20 rounded  mb-14">
				{tabs.map((item, index) => {
					return (
						<Tab
							key={index}
							onClick={getResponses}
							className={({ selected }) => {
								return `hover:bg-green-300 font-semibold rounded-lg focus:border-none outline-none focus:ring-2 " ${
									selected
										? "bg-green-500 text-slate-800 px-6 py-3 ring-green-900"
										: "bg-transparent px-6 py-3 ring-green-900"
								}`;
							}}
						>
							{item}
						</Tab>
					);
				})}
			</Tab.List>
			<Tab.Panels>
				<Tab.Panel>
					<Form />
				</Tab.Panel>
				<Tab.Panel>
					<TabelaRespostas data={responses} />
				</Tab.Panel>
				<Tab.Panel>
					<Pesquisa data={responses} />
				</Tab.Panel>
				<Tab.Panel>
					<Statistics data={stats} />
				</Tab.Panel>
			</Tab.Panels>
		</Tab.Group>
	);
}
