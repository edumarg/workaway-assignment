import { userLoggedIn, userLoggedOut } from "./actions";

export default function reducer(state = [], action) {
  if (action.type === userLoggedIn.type)
    return [{ currentUser: action.payload }];
  else if (action.type === userLoggedOut.type) return [];
  else return state;
}
