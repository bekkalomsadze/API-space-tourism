async function getData() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/bekkalomsadze/API-space-tourism/refs/heads/main/data.ts"
    );

    console.log(response);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

getData();
