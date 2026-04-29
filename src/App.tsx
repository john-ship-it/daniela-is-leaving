import { useState } from "react";

const steps = [
  {
    title: "First Clue",
    question: `Miss Daniela!
  
    Your last night in London has arrived. You do not know your destination tonight, nor your journey. We start at your house. You will be given clues that lead you to the next part of the journey (they’ll all be pubs!).

Walking by our first stop you’d think we’d be on our way to eating delicious scallop out of the shell, or smoked sushi. But instead we will be stopping at a THIN boat. 

Let’s grab a pint and try not to float away!!!`,
    answer: "Narrowboat",
    success: "Correct. Moving on...",
  },
  {
    title: "Second Clue",
    question: `I don’t know whether to bring my dirty clothes or stay for a pint at this next spot. 
    
    It’s where the mouth of a market opens, one we’ve been to before. It follows our previous trajectory. 
    
    That’s all ya get for a clue, where are we heading?`,
    answer: "Coin Laundry",
    success: "Nice. One more...",
  },
  {
    title: "Third Clue",
    question: `It’s our last stop before the meal! You won’t know this pub by name. 
    
    But walking opposite to it, you may hear the groan of a mummie or the war cry of an Ancient Greek. The entrance to these treasures may distract you from the entrance to this tavern! 
    
    But let’s stop instead and grab one more before a “bussin” meal.`,
    answer: "Museum Tavern",
    success: "Nice. One more...",
  },
  {
    title: "Final Clue",
    question: `This is your last clue. 
    
    I can practically taste all our small dishes. 
    
    This is a Daniela favourite. We’ve been twice. It is anything but British in cuisine. There are multiple locations but we shall be dining at the one closest us. This food will make you think of sunny days, beaches, chill people and tanned clothing. Seafood features heavily as well as pork. 
    
    I can’t wait, so hurry up and guess our last location!`,
    answer: "Barrafina",
    success: "🎉 You solved everything!",
  },
];

export default function App() {
  const [stepIndex, setStepIndex] = useState(0);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentStep = steps[stepIndex];

    if (input.toLowerCase() === currentStep.answer.toLowerCase()) {
      const nextStep = stepIndex + 1;

      if (nextStep < steps.length) {
        setStepIndex(nextStep);
        setFeedback("");
      } else {
        setFeedback("🎉 You solved everything!");
      }

      setInput("");
    } else {
      setFeedback("❌ Wrong answer, try again.");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>{steps[stepIndex].title}</h2>

        <p style={styles.question}>{steps[stepIndex].question}</p>

        {feedback && <p style={styles.feedback}>{feedback}</p>}

        {stepIndex < steps.length && (
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              style={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Your answer..."
            />
            <button style={styles.button} type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    whiteSpace: "pre-line",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "sans-serif",
  },
  card: {
    background: "white",
    padding: "2rem",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    width: "540px",
    textAlign: "center",
  },
  title: {
    marginBottom: "1rem",
  },
  message: {
    marginBottom: "1.5rem",
    minHeight: "48px",
  },
  form: {
    marginTop: "40px",
    display: "flex",
    gap: "0.5rem",
  },
  input: {
    flex: 1,
    padding: "0.5rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    border: "none",
    background: "#667eea",
    color: "white",
    cursor: "pointer",
  },
};
