export const ADD_NOTIFICATION = 'notifications/ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'notifications/REMOVE_NOTIFICATION';

const initialState = {
  notifications: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.notification]
      };

    case REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: [
          ...state.notifications.slice(0, action.id),
          ...state.notifications.slice(action.id + 1)
        ]
      };

    default:
      return state;
  }
};

export const addNotification = notification => (dispatch, getState) =>
  new Promise(resolve => {
    dispatch({
      type: ADD_NOTIFICATION,
      notification
    });

    if (!notification.sticky) {
      const index = getState().notifications.notifications.length - 1;

      setTimeout(() => {
        dispatch(removeNotification(index));
      }, 3000);
    }

    resolve(notification);
  });

export const removeNotification = id => dispatch =>
  new Promise(resolve => {
    dispatch({
      type: REMOVE_NOTIFICATION,
      id
    });

    resolve({});
  });
