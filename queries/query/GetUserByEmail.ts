export const GetUserByEmail = `
  query GetUserByEmail($email: String!) {
    user: user(where: {email: {_eq: $email}}, limit: 1) {
      uuid
      first_name
      last_name
    }
  }
`;
