import { DiscordLogo, Lightning } from "phosphor-react";
import { Link } from "react-router-dom";
import { Teacher } from "../../../Teacher";
import { AccessCard } from "./AccessCard";

interface ContentProps {
    title: string;
    description: string;
    challengeUrl?: string;
    teacherId: string;
}

export function Content({ title, description, challengeUrl, teacherId }: ContentProps) {
    return(
        <section
         className="
            flex flex-col gap-y-[80px] px-8 pt-8
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
                        {title}
                    </h2>

                    <p
                    className="
                        text-base text-base-text-body mb-[24px]
                    "
                    >
                        {description}
                    </p>

                    <Teacher 
                     id={teacherId}
                    />
                </section>

                <section
                className="
                    flex flex-col min-w-fit gap-y-[16px]
                "
                >
                    <a
                    className="
                        bg-brand-green-500 text-white text-sm flex justify-center gap-x-[0.65rem] py-4 px-[0.85rem] font-bold rounded w-full min-w-fit uppercase transition-colors cursor-pointer
                        hover:bg-brand-green-600
                    "
                    >
                        <DiscordLogo />
                        Comunidade no discord
                    </a>

                    {
                        challengeUrl ? 
                            <Link
                             to={challengeUrl}
                             className="
                                border border-solid border-brand-blue-300 font-bold text-brand-blue-300 text-sm flex justify-center gap-x-[0.65rem] rounded py-4 px-2 w-full min-w-fit uppercase transition-colors
                                hover:bg-brand-blue-300 hover:text-base-element
                             "
                            >
                                <Lightning/>
                                Acesse o desafio
                            </Link>
                        :
                            null
                    }
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