import { gql, useQuery } from "@apollo/client";

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
    const { data } = useQuery<lessonsQueryInterface>(GET_LESSONS_QUERY);


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
                        data!.lessons.map(({ availableAt, lessonType, title, id, slug}) => {
                            return (
                                <ClassCard
                                 key={id}
                                 availableAt={availableAt}
                                 lessonType={lessonType}
                                 title={title}
                                 slugProp={slug}
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