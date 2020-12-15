import React, { useState } from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Section from "../Section/Section";
import Notificaion from "../Notification/Notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const currentFeedback = (event) => {
    switch (event.currentTarget.name) {
      case "good":
        setGood((prevstate) => prevstate + 1);
        break;
      case "neutral":
        setNeutral((prevstate) => prevstate + 1);
        break;
      case "bad":
        setBad((prevstate) => prevstate + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return neutral + bad + good;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };
  const options = ["good", "neutral", "bad"];
  return (
    <>
      <Section title="Please live feedback">
        <FeedbackOptions options={options} onLeaveFeedback={currentFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notificaion message="No feedback given" />
        )}
      </Section>
    </>
  );
}
