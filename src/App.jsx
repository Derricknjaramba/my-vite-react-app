import React from "react";
import FeedbackForm from ".components/FeedbackForm";

const App = () => {
 
  const handleFeedbackSubmit = async (feedbackData) => {
    try {
      const response = await fetch("https://your-backend-api-url/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit feedback");
      }

      const result = await response.json();
      alert("Feedback submitted successfully!");
      console.log("Feedback Result:", result);
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Failed to submit feedback. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <FeedbackForm onSubmitFeedback={handleFeedbackSubmit} />
    </div>
  );
};

export default App;
