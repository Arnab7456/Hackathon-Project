import React, { useState } from 'react';
import axios from 'axios';

function Chatbot() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [history, setHistory] = useState([]);
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [error, setError] = useState('');

  const generateAnswer = async (e) => {
    e.preventDefault();
    setGeneratingAnswer(true);
    setAnswer('Loading your answer...\nIt might take up to 10 seconds');
    try {
      const response = await axios.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBDVrYpONq1T7j2Y04eejLZE740Mx8WpIc',
        {
          contents: [{ parts: [{ text: question }] }],
        }
      );

      const generatedText =
        response.data.candidates[0]?.content?.parts[0]?.text || 'No answer found';
      setAnswer(generatedText);
      setError('');
      updateHistory(question, generatedText);
    } catch (error) {
      console.error('Error fetching response:', error);
      setAnswer('Sorry - Something went wrong. Please try again!');
      setError('Failed to fetch response');
    } finally {
      setGeneratingAnswer(false);
    }
  };

  const updateHistory = (question, answer) => {
    const updatedHistory = [...history];
    updatedHistory.push({ question, answer });
    if (updatedHistory.length > 5) {
      updatedHistory.shift(); // Remove the oldest entry
    }
    setHistory(updatedHistory);
  };

  return (
    <div className="bg-white min-h-screen p-3 flex justify-center items-center">
      <div className="w-full md:w-2/3 text-center">
        <form
          onSubmit={generateAnswer}
          className="text-center rounded bg-gray-50 py-2"
        >
          <h1 className="text-3xl">Ask anything</h1>
          <textarea
            required
            className="border rounded w-full md:w-11/12 my-2 min-h-fit p-3"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask anything"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-300 p-3 rounded-md hover:bg-blue-400 transition-all duration-300"
            disabled={generatingAnswer}
          >
            Generate answer
          </button>
        </form>
        <div className="text-left mt-4">
          {error ? (
            <p className="text-red-600 p-3">{error}</p>
          ) : (
            <>
              <h2 className="text-xl font-semibold mb-2">Your Question:</h2>
              <p className="bg-gray-200 rounded-lg p-3">{question}</p>
              <h2 className="text-xl font-semibold mt-4 mb-2">Generated Answer:</h2>
              <p className="bg-gray-200 rounded-lg p-3">{answer}</p>
              <h2 className="text-xl font-semibold mt-4 mb-2">History:</h2>
              {history.map((item, index) => (
                <div key={index} className="bg-gray-200 rounded-lg p-3 mb-2">
                  <p><strong>Question:</strong> {item.question}</p>
                  <p><strong>Answer:</strong> {item.answer}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
