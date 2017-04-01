import { SIGNED_IN } from '../constants';

let user = {
  email: null
}

export default ( state = user, action ) => {
  switch (action.type) {
    case SIGNED_IN:
      const { email } = action;
      // es6 equivalent to const email = action.email
      user = {
        email
      }
      return user;
    default:
      return state;
  }
}
