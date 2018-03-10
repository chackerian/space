export default function(state = [], action) {
  switch(action.type) {
    case "ADD_LISTING":
      return "app";
    case "JOIN":
      return "app";
    case "REPORT":
      return "app";
    case "LOGIN":
      return "app";
    case "LOGOUT":
      return "app";
    default:
      return "app";
  }
}
