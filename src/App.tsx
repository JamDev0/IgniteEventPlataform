import { gql, useQuery } from "@apollo/client"

const LESSONS_TITLE_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface lessonsInterface {
  id: string;
  title: string
}

export function App() {
  const { data } = useQuery<{ lessons: lessonsInterface[] }>(LESSONS_TITLE_QUERY)

  return (
    <ul>
      {
        data?.lessons.map(lesson => <li key={lesson.id}>{lesson.title}</li>)
      }
    </ul>
  )
}
