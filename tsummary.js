document.getElementById('summarize-btn').addEventListener('click', async () => {
  const inputText = document.getElementById('inputText').value;
  if (inputText.trim() === "") {
      alert("Please enter some text to summarize.");
      return;
  }

  try {
      const response = await fetch('YOUR_SUMMARY_API_ENDPOINT', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ text: inputText })
      });

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const data = await response.json();
      document.getElementById('outputSummary').innerText = data.summary;
  } catch (error) {
      console.error('Error fetching summary:', error);
      alert('There was an error summarizing your text. Please try again.');
  }
});