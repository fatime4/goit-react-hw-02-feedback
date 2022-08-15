import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(element => (
        <button
          key={nanoid()}
          type="button"
          onClick={() => onLeaveFeedback(element)}
          className={s.btn}
        >
          {element}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.defaultProps = [];

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
