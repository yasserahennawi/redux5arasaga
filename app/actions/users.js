export const fetchUsers = () => {
    return {
        type: 'FETCH_USERS'
    }
};

export const fetchUsersSuccess = (users) => {
    return {
        type: 'FETCH_USERS_SUCCESS',
        payload: users
    }
};

export const fetchUsersFailed = (error) => {
    console.log(error);
    return {
        type: 'FETCH_USERS_FAILED',
        payload: error
    }
};
