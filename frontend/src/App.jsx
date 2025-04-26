import { useState, useEffect } from "react";
import FeedbackForm from "./components/FeedbackForm";
import AdminView from "./components/AdminView";
import { Moon, Sun } from "lucide-react";  // Using lucide-react icons for Sun and Moon

function App() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Check for stored dark mode preference in localStorage (optional)
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const newDarkMode = !darkMode;
    if (newDarkMode) {
      document.documentElement.classList.add("dark"); //
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  };

  const handleSubmit = async (data) => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    if (!baseUrl) {
      console.error("API Base URL not set!");
      return;
    }

    await fetch(`${baseUrl}/submit-feedback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, timestamp: Date.now() }),
    });
  };

  return (

    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <header className="md:flex-row flex-col p-6 bg-blue-600 dark:bg-gray-800 text-white flex justify-between items-center shadow-md rounded-b-lg">
        <h1 className="text-2xl font-extrabold tracking-wide">Feedback Collector</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowAdmin(!showAdmin)}
            className="hover:text-gray-300 transition-colors duration-300"
          >
            {showAdmin ? "Submit Feedback" : "View Submitted Feedback"}
          </button>
          <button
            onClick={toggleDarkMode}
            className="p-3 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-full shadow-md hover:scale-110 transition-transform duration-300"
            title="Toggle Dark Mode"
          >
            {darkMode ?<Moon size={20}/> : <Sun size={20} />  }
          </button>
        </div>
      </header>

      <main className="p-6 max-w-3xl mx-auto animate-fade-in">
        {showAdmin ? <AdminView /> : <FeedbackForm onSubmit={handleSubmit} />}
      </main>

      <footer className="text-center text-sm p-4 mt-6 border-t dark:border-gray-700 text-gray-600 dark:text-gray-300">
        Made By Yatin Goyal | Candidate Task
      </footer>
    </div>
  );
}

export default App;
