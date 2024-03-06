document.addEventListener("DOMContentLoaded", () => {
  const fetchButton = document.getElementById(
    "fetchButton"
  ) as HTMLButtonElement | null;

  if (!fetchButton) {
    console.error('Button with ID "fetchButton" not found.');
    return;
  }

  fetchButton.addEventListener("click", async () => {
    try {
      console.log("Hello world");
    } catch (error) {
      console.error("Error:", error);
    }
  });
});
