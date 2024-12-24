import { gql } from '@urql/next'

export const SignupMutation = gql`
  mutation Signup($input: AuthInput!) {
    createUser(input: $input) {
      token
    }
  }
`
