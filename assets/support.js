const supportForm = document.getElementById("supportForm");
const formStatus = document.getElementById("formStatus");

if (supportForm && formStatus) {
  supportForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const submitButton = supportForm.querySelector("button[type='submit']");

    formStatus.textContent = "Sending your request...";
    formStatus.style.color = "#6b5547";

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Submitting...";
    }

    try {
      const response = await fetch(supportForm.action, {
        method: "POST",
        body: new FormData(supportForm),
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      formStatus.textContent = "Thanks, your request has been sent to info@sakasfoods.in. Team Sakas will contact you soon.";
      formStatus.style.color = "#137752";
      supportForm.reset();
    } catch (error) {
      formStatus.textContent = "Sorry, we could not send the request right now. Please call +91 93733 38587 or email info@sakasfoods.in.";
      formStatus.style.color = "#9f2f2f";
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Submit Request";
      }
    }
  });
}
