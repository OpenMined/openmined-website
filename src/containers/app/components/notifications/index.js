import React from 'react';

import './notifications.scss';

const Notification = ({ removeFunc, index, text, type }) => (
  <li className={'notification ' + (type || 'primary')}>
    {text.message}
    <button className="close" onClick={() => removeFunc(index)}>
      &times;
    </button>
  </li>
);

const Notifications = props =>
  props.notifications.length > 0 ? (
    <ul id="notifications">
      {props.notifications.map((notification, index) => {
        return (
          <Notification
            key={index}
            removeFunc={props.removeFunc}
            index={index}
            {...notification}
          />
        );
      })}
    </ul>
  ) : null;

export default Notifications;
