export default function reducer(state = [], action) {
  if (action.type === "userLoggedin") return [{ currentUser: action.payload }];
  else if (action.type === "userLoggedout") return [];
  else return state;
}
