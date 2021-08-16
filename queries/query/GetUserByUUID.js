export const GetUserByUUID = `
  query GetUser($uuid: uuid!) {
    user: user_by_pk(uuid: $uuid) {
      uuid
      first_name
      last_name
    }
  }
`;
