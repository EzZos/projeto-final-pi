import { Response } from "../interfaces/response";

interface TabelaRespostasProps {
	data: Response[];
}

export function TabelaRespostas({ data }: TabelaRespostasProps) {
	return (
		<div className="m-auto w-fit text-slate-800 flex gap-6 items-center border-slate-700 border-2 shadow-2xl px-6 py-6 rounded">
			<div className="flex flex-col gap-3 items-center w-fit">
				<h2 className="font-bold text-xl">Nome</h2>
				{data.map((person, index) => {
					return <span key={index}>{person.nome}</span>;
				})}
			</div>
			<div className="flex flex-col gap-3 items-center w-fit">
				<h2 className="font-bold text-xl">Idade</h2>
				{data.map((person, index) => {
					return <span key={index}>{person.idade}</span>;
				})}
			</div>
			<div className="flex flex-col gap-3 items-center w-fit">
				<h2 className="font-bold text-xl">Gênero</h2>
				{data.map((person, index) => {
					return <span key={index}>{person.genero}</span>;
				})}
			</div>
			<div className="flex flex-col gap-3 items-center w-fit">
				<h2 className="font-bold text-xl">Artigos violados</h2>
				{data.map((person, index) => {
					return (
						<div className="flex gap-4" key={index}>
							{person.atentado ? <span>Artigo 3</span> : null}
							{person.preso ? <span>Artigo 9</span> : null}
							{person.furtado ? <span>Artigo 17</span> : null}
							{person.censura ? <span>Artigo 19</span> : null}
							{person.associacao ? <span>Artigo 20</span> : null}
						</div>
					);
				})}
			</div>
		</div>
	);
}
