export default function (state = [], action) {
  switch (action.type) {
    case 'FETCH_USERS_SUCCESS':
      console.log(action.payload)
      return  action.payload
    case 'FETCH_USERS_FAILED':
      return  action.payload
  }
  return state;
}
