import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { Response } from "../interfaces/response";

interface PesquisaProps {
	data: Response[];
}

export function Pesquisa({ data }: PesquisaProps) {
	const [pesquisa, setPesquisa] = useState("");
	const [respostaProcurada, setRespostaProcurada] = useState<Response>();
	function getResposta() {
		const resposta = data.filter((item) => item.nome == pesquisa);
		if(resposta[0] === undefined) {
			alert("Não existem respostas dessa pessoa.");
			throw new Error("O nome inserido não consta no banco de dados");
		} else {
			setRespostaProcurada(resposta[0]);
		}

	}
	return (
		<>
			<div className="flex flex-col gap-4 w-fit m-auto ">
				<h2 className="text-xl text-slate-800 text-center">
					Pesquise uma resposta!
				</h2>

				<div className="flex gap-3 items-center">
					<input
						className="bg-slate-300 px-4 py-2 rounded shadow focus:ring-2 ring-black outline-none"
						type="text"
						placeholder="Digite o nome da pessoa"
						onChange={(e) => setPesquisa(e.target.value.trim())}
					/>
					<button type="submit">
						<MagnifyingGlass
							onClick={getResposta}
							size={32}
							className="text-slate-800"
						/>
					</button>
				</div>
			</div>
			{respostaProcurada ? (
				<div className="m-auto w-fit text-slate-800 flex gap-6 items-center border-slate-700 border-2 shadow-2xl px-6 py-6 rounded mt-9">
					<div className="flex flex-col gap-3 items-center w-fit">
						<h2 className="font-bold text-xl">Nome</h2>
						<span>{respostaProcurada.nome}</span>
					</div>
					<div className="flex flex-col gap-3 items-center w-fit">
						<h2 className="font-bold text-xl">Idade</h2>
						<span>{respostaProcurada.idade}</span>
					</div>
					<div className="flex flex-col gap-3 items-center w-fit">
						<h2 className="font-bold text-xl">Gênero</h2>
						<span>{respostaProcurada.genero}</span>
					</div>
					<div className="flex flex-col gap-3 items-center w-fit">
						<h2 className="font-bold text-xl">Artigos violados</h2>
						<div className="flex gap-4">
							{respostaProcurada.atentado ? <span>Artigo 3</span> : null}
							{respostaProcurada.preso ? <span>Artigo 9</span> : null}
							{respostaProcurada.furtado ? <span>Artigo 17</span> : null}
							{respostaProcurada.censura ? <span>Artigo 19</span> : null}
							{respostaProcurada.associacao ? <span>Artigo 20</span> : null}
						</div>
					</div>
				</div>
			) : null}
		</>
	);
}
