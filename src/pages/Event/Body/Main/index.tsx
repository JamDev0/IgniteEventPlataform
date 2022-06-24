import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Content } from "./Content";
import { Footer } from "../../../../components/Footer";

import { Video } from "./Video";
import { useGetLessonBySlugQuery } from "../../../../graphql/generated";

export function Main() {
    const { slug } = useParams<{slug: string}>();

    const { data } = useGetLessonBySlugQuery({
        variables: {
            slug: slug,
        },
    });

    return(
        <main
         className="flex flex-col justify-between flex-1"
        >
            {
                slug && data && data.lesson && data.lesson.teacher ?
                    <>
                        <Video
                         videoId={data.lesson.videoId}
                        />
                        <Content
                         description={data.lesson.description!}
                         title={data.lesson.title}
                         challengeUrl={data.lesson.challenge?.url?? undefined}
                         teacherId={data.lesson.teacher.id}
                        />
                        <div
                        className="px-8 pb-8"
                        >
                            <Footer/>
                        </div>
                    </>
                :
                    null
            }
        </main>
    )
}