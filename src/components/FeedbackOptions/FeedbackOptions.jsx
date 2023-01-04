import PropTypes from 'prop-types';
import { ListOfButtons, ButtonsItem, Button } from './FeedbackOptions.styled.jsx';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ListOfButtons>
      {options.map(key => {
        return (
          <ButtonsItem key={key}>
            <Button type="button" onClick={() => onLeaveFeedback(key)}>
              {key}
            </Button>
          </ButtonsItem>
        );
      })}
    </ListOfButtons>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
