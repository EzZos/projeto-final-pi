import { FormEvent } from "react";
import { Checkbox } from "./components/Checkbox";
import Img from "/irish.svg";
import axios from "axios";

export function Form() {
	async function submitHandler(event: FormEvent) {
		event.preventDefault();

		const formData = new FormData(event.target as HTMLFormElement);
		const data = Object.fromEntries(formData);

		try {
			const response = await axios.post("http://localhost:3333/send", {
				nome: data.nome,
				idade: Number(data.idade),
				genero: data.genero,
				preso: data.preso === "on" ? true : false,
				censura: data.censura === "on" ? true : false,
				furtado: data.furtado === "on" ? true : false,
				atentado: data.atentado === "on" ? true : false,
				associacao: data.associacao === "on" ? true : false,
			});
			alert("Resposta enviada com sucesso!");
			return response;
		} catch (err) {
			console.log(err);
			alert("Erro ao enviar resposta!");
		}
	}

	return (
		<form
			onSubmit={submitHandler}
			method="post"
			className="bg-green-600 rounded-lg shadow-xl px-14 py-9 flex flex-col gap-3 items-center w-fit m-auto"
		>
			<img src={Img} alt="Logo" className="w-24 h-36" />
			<div className="w-full flex flex-col gap-3">
				<label
					htmlFor="nome"
					className="flex flex-col gap-2 text-slate-50 font-semibold text-lg w-full"
				>
					Nome completo
					<input
						required
						name="nome"
						id="nome"
						type="text"
						placeholder="Digite o seu nome"
						className="bg-slate-50 text-slate-800 py-4 px-3 outline-none rounded focus:ring-4 ring-green-400"
					/>
				</label>
				<div className="flex gap-4 justify-between">
					<label
						htmlFor="genero"
						className="flex flex-col gap-2 text-slate-50 font-semibold text-lg min-w-max"
					>
						Gênero
						<select
							required
							name="genero"
							id="genero"
							defaultValue="selecionar"
							className="bg-slate-50 text-slate-800 py-4 px-3 outline-none rounded focus:ring-4 ring-green-400 w-56"
						>
							<option value="Masculino">Masculino</option>
							<option value="Feminino">Feminino</option>
							<option value="Outros">Outros</option>
						</select>
					</label>
					<label
						htmlFor="idade"
						className="flex flex-col gap-2 text-slate-50 font-semibold text-lg"
					>
						Idade
						<input
							required
							type="number"
							name="idade"
							id="idade"
							className="bg-slate-50 text-slate-800 py-4 px-3 outline-none rounded focus:ring-4 ring-green-400 "
						/>
					</label>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<label htmlFor="preso" className="flex gap-3 items-center">
					<span className="text-slate-50 text-lg font-medium">
						Você já foi preso, detido ou exilado sem justificativa?
					</span>
					<Checkbox id="preso" name="preso" />
				</label>
				<label htmlFor="censura" className="flex gap-3 items-center">
					<span className="text-slate-50 text-lg font-medium">
						Você já teve sua liberdade de expressão censurada?
					</span>
					<Checkbox id="censura" name="censura" />
				</label>
				<label htmlFor="associacao" className="flex gap-3 items-center">
					<span className="text-slate-50 text-lg font-medium">
						Você já foi obrigado a fazer parte de uma associação?
					</span>
					<Checkbox id="associacao" name="associacao" />
				</label>
				<label htmlFor="furtado" className="flex gap-3 items-center">
					<span className="text-slate-50 text-lg font-medium">
						Você já foi assaltado ou furtado?
					</span>
					<Checkbox id="furtado" name="furtado" />
				</label>
				<label htmlFor="atentado" className="flex gap-3 items-center">
					<span className="text-slate-50 text-lg font-medium">
						Alguém já tentou tirar sua vida?
					</span>
					<Checkbox id="atentado" name="atentado" />
				</label>
			</div>
			<button
				type="submit"
				className="bg-slate-50 text-slate-800 w-full rounded px-16 py-4 text-xl font-semibold hover:bg-slate-200 transition-colors duration-300 outline-none focus:ring-4 ring-green-400"
			>
				Enviar
			</button>
		</form>
	);
}
