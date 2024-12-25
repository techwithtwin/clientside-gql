import { gql } from '@urql/next'

export const IssuesQuery = gql`
  query Issues {
    issues {
      id
      status
      content
      createdAt
    }
  }
`
