import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient({
  log: ["query"],
});

app.post("/send", async (request, response) => {
  const body = request.body;
  const resposta = await prisma.person.create({
    data: {
      nome: body.nome.trim(),
      idade: body.idade,
      genero: body.genero,
      preso: body.preso,
      censura: body.censura,
      furtado: body.furtado,
      atentado: body.atentado,
      associacao: body.associacao,
    },
  });
  return response.status(201).json(resposta);
});

app.get("/responses", async (request, response) => {
  const respostas = await prisma.person.findMany({
    select: {
      nome: true,
      idade: true,
      genero: true,
      preso: true,
      atentado: true,
      censura: true,
      furtado: true,
      associacao: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return response.json(respostas);
});

app.listen(3333);
