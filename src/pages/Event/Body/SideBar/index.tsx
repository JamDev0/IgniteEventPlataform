import { useGetLessonsQuery } from "../../../../graphql/generated";

import { ClassCard } from "./ClassCard";

export function SideBar() {
    const { data } = useGetLessonsQuery();


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