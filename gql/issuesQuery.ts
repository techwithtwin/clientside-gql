import { gql } from '@urql/next'

export const IssuesQuery = gql`
  query Issues($input: IssuesFilterInput) {
    issues(input: $input) {
      id
      status
      content
      createdAt
    }
  }
`
