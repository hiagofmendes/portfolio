"use client";
// @ts-ignore

import { motion } from "framer-motion";
import { skillsData } from "../data/data";
import { fadeIn } from "../variants";

import { PiGithubLogoFill, PiEyeBold } from "react-icons/pi";
import { Typography, Button, Carousel } from "@material-tailwind/react/";

interface HeroSectionProps {
  imageUrl: string;
  title: string;
  description: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="relative h-full w-full rounded-none">
      <img src={imageUrl} alt={title} className="h-full w-full object-cover" />

      <div
        className="absolute inset-0 grid h-full w-full place-items-center bg-black/50"
        id="projects"
      >
        <div className="w-3/4 text-center md:w-2/4">
          <Typography
            placeholder=""
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl font-baimj"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {title}
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-12 opacity-80 font-roboto text-sm md:text-base"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {description}
          </Typography>
          <div className="flex justify-center gap-2">
            <Button
              size="sm"
              className="hover:scale-110 bg-purple-600 font-bold text-gray-50 font-baimj flex items-center gap-1 p-2"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Github <PiGithubLogoFill className="text-xl uppercase" />
            </Button>
            <Button
              size="sm"
              color="white"
              variant="text"
              className="hover:scale-110 font-bold border-purple-600 border-2 font-baimj text-purple-600 p-2 flex items-center gap-1"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Preview <PiEyeBold className="text-xl" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default function SkillsComponent() {
  return (
    <Carousel
      className="rounded-none h-screen md:h-auto lg:h-[500px] bg-gray-900"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1535979014625-490762ceb2ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        title="Sistema de Controle Financeiro"
        description="Um sistema de controle financeiro pessoal é uma aplicação ou ferramenta que permite aos indivíduos monitorar e gerenciar suas finanças pessoais. Ele inclui recursos como rastreamento de despesas e receitas, criação de orçamentos, categorização de transações e geração de relatórios financeiros para ajudar as pessoas a entenderem e tomar decisões informadas sobre suas finanças. Essa ferramenta auxilia na gestão de gastos, economia e planejamento financeiro pessoal, ajudando os usuários a alcançarem seus objetivos financeiros."
      />
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        title="Blog"
        description="Um blog é uma plataforma online onde autores compartilham regularmente informações, histórias, opiniões e conhecimentos em forma de artigos. Os leitores podem explorar uma variedade de tópicos, desde notícias e entretenimento até tutoriais e análises especializadas. Os blogs promovem a interação e a troca de ideias, fornecendo uma fonte valiosa de conteúdo para aprender, informar-se e se inspirar."
      />
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80"
        title="Clone Evernote"
        description="Os programas de anotação são úteis para organizar informações pessoais, tomar notas em reuniões ou aulas, criar listas de tarefas, salvar recortes da web, fazer rascunhos de ideias e muito mais. Eles tornam mais fácil capturar, armazenar e acessar informações importantes de forma digital, tornando a gestão de informações mais eficiente e organizada. Exemplos populares incluem Evernote, Microsoft OneNote e Notion."
      />
    </Carousel>
  );
}
