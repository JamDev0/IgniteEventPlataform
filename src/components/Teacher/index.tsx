import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react";


const GET_TEACHER_BY_ID = gql`
    query getTeacherById($id: ID) {
        teacher(where: {id: $id}) {
            avatarURL
            bio
            name
        }
    }
`

interface TeacherProps {
    id: string
}

interface getTeacherQuery {
    teacher: {
        avatarURL: string;
        bio: string;
        name: string;
    }
}

export function Teacher({ id }: TeacherProps) {
    const { data } = useQuery<getTeacherQuery>(GET_TEACHER_BY_ID, {
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
             src={data.teacher.avatarURL}
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

                    {data.teacher.name}
                </h2>

                <span
                 className="
                    text-sm text-base-text-secondaryBody
                 "
                >
                    {data.teacher.bio}
                </span>
            </section>
        </section>
    )
}