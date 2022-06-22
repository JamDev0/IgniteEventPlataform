import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

import { ClassCard } from "./ClassCard";

const GET_LESSONS_QUERY = gql`
        query {
            lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
                availableAt
                lessonType
                title
                id
                slug
            }
        }
`

interface lessonsInterface {
    availableAt: string;
    title: string;
    lessonType: 'class' | 'live';
    id: string;
    slug: string;
}

interface lessonsQueryInterface {
    lessons: lessonsInterface[] | []
}

export function SideBar() {
    const [selectedCardId, setSelectedCardId] = useState<string>('');
    const { data } = useQuery<lessonsQueryInterface>(GET_LESSONS_QUERY);

    function handleCardClick(id: string) {
        setSelectedCardId(id);
    }

    function handleCardSelectionVerification(id: string) {
        return selectedCardId === id
    }

    return(
        <nav
         className="
            flex flex-col gap-y-[32px] p-[24px] w-min min-w-[430px] bg-base-element h-full shrink flex-1
         "
        >

            <h2
             className="
                font-bold text-2xl text-white pb-[24px] border-b border-b-base-divisor w-full
             "
            >
                Cronograma das aulas
            </h2>

            {
                data
                ? 
                    data!.lessons.length > 0
                    ?
                        data!.lessons.map(({ availableAt, lessonType, title, id }) => {
                            return (
                                <ClassCard
                                 key={id}
                                 availableAt={availableAt}
                                 lessonType={lessonType}
                                 title={title}
                                 id={id}
                                 onClick={handleCardClick}
                                 verifyIfThisCardIsSelected={handleCardSelectionVerification}

                                />
                            )
                        })
                    :
                        null
                :
                    null
            }
        </nav>
    )
}