import { Component } from 'react';
import { Box } from 'components/Box/Box.styled';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const MESSAGE = 'No one has rated us yet. Do you want to be first?';

export class App extends Component {
  state = { ...INITIAL_STATE };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = options => {
    return options.reduce((total, item) => {
      total += this.state[item];
      return total;
    }, 0);
  };

  countPositiveFeedbackPercentage = total => {
    return total === 0 ? 0 : Number(((this.state.good / total) * 100).toFixed(2));
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(options);
    return (
      <Box>
        <Section title="Please leave your feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message={MESSAGE} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage(total)}
            />
          )}
        </Section>
      </Box>
    );
  }
}
