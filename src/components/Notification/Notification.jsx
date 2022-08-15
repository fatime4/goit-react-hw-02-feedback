import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p>{message}</p>;
};

export default Notification;

Notification.defaultProps = [];

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
