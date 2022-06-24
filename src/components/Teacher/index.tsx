import { gql, useQuery } from "@apollo/client"

import { useEffect } from "react";
import { useGetTeacherByIdQuery } from "../../graphql/generated";



interface TeacherProps {
    id: string
}


export function Teacher({ id }: TeacherProps) {
    const { data } = useGetTeacherByIdQuery({
        variables: {
            id: id,
        }
    });

    useEffect(()=>{
        console.log('Teacher', id)
    },[id])


    if(!data) {
        return (<p>loading...</p>)
    }


    return(
        <section
         className="
            flex gap-x-4 h-min items-center
         "
        >

            <img 
             src={data?.teacher?.avatarURL}
             className="
                rounded-full object-cover object-center h-16 w-16 aspect-square border-2 border-solid border-brand-blue-300
             "
            />

            <section
             className="
                flex flex-col
             "
            >
                <h2
                 className="
                    text-2xl font-bold text-base-text-title
                 "
                >

                    {data.teacher?.name}
                </h2>

                <span
                 className="
                    text-sm text-base-text-secondaryBody
                 "
                >
                    {data.teacher?.bio}
                </span>
            </section>
        </section>
    )
}