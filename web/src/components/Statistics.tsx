import { StatsInterface } from "../interfaces/statistics";

interface StatisticsProps {
	data: StatsInterface;
}

export function Statistics({ data }: StatisticsProps) {
	return (
		<div className="m-auto w-fit text-slate-800 text-xl flex flex-col font-semibold gap-6 items-center border-slate-700 border-2 shadow-2xl px-8 py-8 rounded">
			<span>Total de casos com Homens: {data.totalMasc}</span>
			<span>Total de casos com outros gêneros: {data.totalOutros}</span>

			<span>Total de casos com Mulheres: {data.totalFem}</span>

			<span>Total de casos com maiores de idade: {data.totalMaior}</span>
			<span>Total de casos com menores de idade: {data.totalMenor}</span>

			<span>Casos de censura: {data.totalCensura}</span>
			<span>Casos de atentado contra a vida: {data.totalAtentado}</span>
			<span>Casos de violação à propriedade privada: {data.totalFurtado}</span>
			<span>Casos de violação ao direito de ir e vir: {data.totalPreso}</span>
			<span>
				Casos de violação à liberdade de reunião: {data.totalAssociacao}
			</span>
		</div>
	);
}
