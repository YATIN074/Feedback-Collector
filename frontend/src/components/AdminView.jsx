import { useEffect, useState } from "react";

export default function AdminView() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/feedbacks`)
      .then((res) => res.json())
      .then((data) => setFeedbacks(data));
  }, []);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        Submitted Feedbacks
      </h2>
      <div className="grid gap-4">
        {feedbacks.map((feedback, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 p-4 rounded bg-white dark:bg-gray-800 shadow-md transition-colors"
          >
            <p className="text-gray-800 dark:text-gray-100">
              <span className="font-extrabold">Name:</span> {feedback.name}
            </p>
            <p className="text-gray-800 dark:text-gray-100">
              <span className="font-extrabold">Email:</span> {feedback.email}
            </p>
            <p className="text-gray-800 dark:text-gray-100">
              <span className="font-extrabold">Message:</span> {feedback.message}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              {new Date(feedback.timestamp).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
