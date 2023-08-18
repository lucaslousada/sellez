import { Container } from './styles'

interface NoRecordsFoundProps {
  title: string
  description: string
}

export function NoRecordsFound({
  title,
  description,
}: NoRecordsFoundProps): JSX.Element {
  return (
    <Container>
      <h3>{title}</h3>
      <p>{description}</p>
    </Container>
  )
}
