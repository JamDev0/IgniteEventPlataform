import { DateTime } from "luxon";

import { CheckCircle, Lock } from "phosphor-react";
import { Link, useParams } from "react-router-dom";

interface ClassCardProps {
    availableAt: string;
    title: string;
    lessonType: 'class' | 'live';
    slugProp: string;
}

export function ClassCard({availableAt, title, lessonType, slugProp}: ClassCardProps) {
    const readableDate = DateTime
                         .fromISO(availableAt)
                         .setLocale('pt-BR')
                         .toFormat("EEEE '•' dd 'de' LLLL '•' HH'h'mm")
                         .replaceAll('-feira', '');
    
    const { slug } = useParams<string>();

    console.log(slug)

    function isAvailable() {
        let now = DateTime.now();

        return now >= DateTime.fromISO(availableAt)
    }

    function handleSelectVerification() {
        return slug === slugProp;
    }


    return(
        <Link
         to={`/event/lesson/${slugProp}`}
         className="
            w-full flex flex-col gap-y-[8px] group
         "
        >

            <h3
             className='
                text-base text-base-text-secondaryBody first-letter:uppercase
             '
            >

                {readableDate}
            </h3>

            <section
             className={`
                ${handleSelectVerification() ? 
                    'bg-brand-green-500 relative border border-solid border-brand-green-500 before:bg-brand-green-500 before:rounded-[2px] before:w-[14px] before:h-[14px] before:absolute before:top-[50%] before:left-0 before:rotate-45 before:-translate-x-[50%] before:-translate-y-[50%]' 
                  : 
                    'bg-transparent border border-solid border-base-divisor group-hover:border-brand-green-500'
                }
                flex flex-col gap-y-[16px] rounded p-4 w-full transition-colors
             `}
            >

                <div
                 className="
                    flex justify-between items-center w-full
                 "
                >
                    {
                        isAvailable() ? 
                            <h4
                             className={`
                                ${handleSelectVerification() ? 'text-white' : 'text-brand-blue-300'}
                                flex items-center gap-x-2 font-semibold text-sm 
                             `}
                            >
        
                                <CheckCircle />
                                Conteúdo liberado
                            </h4>
                        :
                            <h4
                             className={`
                                ${handleSelectVerification() ? 'text-white' : 'text-brand-orange-300'}
                                flex items-center gap-x-2 font-semibold text-sm 
                             `}
                            >
        
                                <Lock />
                                Em breve
                            </h4>
                    }

                    

                    <span
                     className={`
                        ${handleSelectVerification() ? 'text-white' : lessonType === 'class' ? 'text-white' : 'text-brand-green-400'}
                        ${handleSelectVerification() ? 'border-white' : 'border-brand-green-400'}
                        border border-solid  rounded px-2 py-1 font-bold text-xs uppercase
                     `}
                    >
                        {
                            lessonType === 'class' ?
                                'Aula prática'
                            :
                                'Ao vivo'
                        }
                    </span>
                </div>
                <p
                 className={`
                    ${handleSelectVerification() ? 'text-white' : 'text-base-text-title'}
                    font-bold text-base
                 `}
                >

                    {title}
                </p>
            </section>

        </Link>
    )
}