import { DiscordLogo, Lightning } from "phosphor-react";
import { Teacher } from "../../../Teacher";
import { AccessCard } from "./AccessCard";

export function Content() {
    return(
        <section
         className="
            flex flex-col gap-y-[80px]
         "
        >
            <section
            className="
                flex gap-x-14
            "
            >

                <section
                className="
                    flex flex-col
                "
                >

                    <h2
                    className="
                        font-bold text-base-text-title text-2xl mb-[16px]
                    "
                    >
                        Aula 01 - Criando o projeto e realizando o setup inicial
                    </h2>

                    <p
                    className="
                        text-base text-base-text-body mb-[24px]
                    "
                    >
                        Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
                    </p>

                    <Teacher/>
                </section>

                <section
                className="
                    flex flex-col min-w-fit gap-y-[16px]
                "
                >
                    <button
                    className="
                        bg-brand-green-500 text-white text-sm flex justify-center gap-x-[0.65rem] py-4 px-[0.85rem] font-bold rounded w-full min-w-fit uppercase
                    "
                    >
                        <DiscordLogo />
                        Comunidade no discord
                    </button>

                    <button
                    className="
                        border border-solid border-brand-blue-300 font-bold text-brand-blue-300 text-sm flex justify-center gap-x-[0.65rem] rounded py-4 px-2 w-full min-w-fit uppercase
                    "
                    >
                        <Lightning/>
                        Acesse o desafio
                    </button>
                </section>
            </section>

            <section
             className="
                flex gap-x-8 gap-y-[35px] w-full flex-wrap justify-center
             "
            >
                <AccessCard/>

                <AccessCard/>
            </section>
        </section>
    )
}