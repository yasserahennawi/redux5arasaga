export default function (state = { }, action) {
  switch (action.type) {
    case 'CRUSH_ADDED_SUCCESS':
      return  action.payload
    // case 'USER_FETCHED_SUCCESSFULL':
    //   return  {
    //     ...state,
    //     "Kemo" : action.payload
    //   }
  }
  return state;
}
