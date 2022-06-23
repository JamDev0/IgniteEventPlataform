import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Content } from "./Content";
import { Footer } from "./Footer";

import { Video } from "./Video";

const GET_LESSON_BY_SLUG = gql`
    query getLessonBySlug($slug: String) {
        lesson(where: {slug: $slug}, stage: PUBLISHED) {
            description
            id
            title
            videoId
            challenge {
            url
            }
            teacher {
            id
            }
        }
    }

`

interface LessonQueryInterface {
    lesson: {
        description: string;
        id: string;
        title: string;
        videoId: string;
        challenge: {
            url: string;
        } | null;
        teacher: {
            id: string;
        }
    }
}

export function Main() {
    const { slug } = useParams<{slug: string}>();

    const { data } = useQuery<LessonQueryInterface>(GET_LESSON_BY_SLUG, {
        variables: {
            slug: slug,
        },
    });

    console.log(data)

    useEffect(()=>{
        console.log(data)
    },[data])

    return(
        <main
         className="flex flex-col justify-between flex-1"
        >
            {
                slug && data !== undefined ?
                    <>
                        <Video
                         videoId={data.lesson.videoId}
                        />
                        <Content
                         description={data.lesson.description}
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