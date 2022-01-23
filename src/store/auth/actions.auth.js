import { USER_LOGGED, USER_SIGNOUT } from './action-types.constant';

export const userLogged = (payload) => {
	return {
		type: USER_LOGGED,
		payload
	};
};

export const userSignout = () => {
	return {
		type: USER_SIGNOUT
	};
};
