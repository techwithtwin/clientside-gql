import { gql } from '@urql/next'

export const CreateIssueMutation = gql`
  mutation CreateIssue($input: CreateIssueInput!) {
    createIssue(input: $input) {
      id
      name
      user {
        email
      }
    }
  }
`
