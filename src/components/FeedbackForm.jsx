import React, { useState } from "react";

const FeedbackForm = ({ onSubmitFeedback }) => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (feedback && rating) {
      setLoading(true);
      try {
        await onSubmitFeedback({ feedback, rating });
        setFeedback("");
        setRating(0);
      } catch (error) {
        console.error("Error submitting feedback:", error);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please provide both feedback and a rating.");
    }
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="feedback">
            Your Feedback
          </label>
          <textarea
            id="feedback"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            placeholder="Share your thoughts about the book..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={4}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Rating</label>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                onClick={() => handleRating(star)}
                className={`w-8 h-8 cursor-pointer ${
                  star <= rating ? "text-yellow-500" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.362 4.188a1 1 0 00.95.69h4.408c.969 0 1.371 1.24.588 1.81l-3.568 2.594a1 1 0 00-.364 1.118l1.362 4.188c.3.921-.755 1.688-1.538 1.118L10 14.347l-3.569 2.595c-.782.57-1.837-.197-1.538-1.118l1.362-4.188a1 1 0 00-.364-1.118L2.324 9.615c-.783-.57-.38-1.81.588-1.81h4.408a1 1 0 00.95-.69l1.362-4.188z" />
              </svg>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Feedback"}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
