import { generateUser } from '../static-data';

export default (state = generateUser(), action) => {
  switch (action.type) {
    default:
      return state;
  }
};
