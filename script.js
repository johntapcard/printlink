
const SHOP = {
  messenger: "https://m.me/61594294572667",
  email: "johntapcard@gmail.com"
};

// Get optional order details from the form.
function getOrderDetails() {
  const name =
    document.getElementById("customerName").value.trim();

  const request =
    document.getElementById("printRequest").value.trim();

  const quantity =
    document.getElementById("quantity").value.trim();

  const size =
    document.getElementById("size").value.trim();

  const instructions =
    document.getElementById("instructions").value.trim();

  return `PRINTING ORDER

Customer name: ${name || "Not provided"}
Print request: ${request || "Not specified"}
Quantity: ${quantity || "Not specified"}
Size / Paper: ${size || "Not specified"}
Instructions: ${instructions || "None"}`;
}

// Send order details through Messenger.
document
  .getElementById("sendMessenger")
  .addEventListener("click", async () => {
    const details = getOrderDetails();

    // Open Messenger.
    const messengerWindow = window.open(
      SHOP.messenger,
      "_blank"
    );

    // Copy the order details for pasting into Messenger.
    try {
      await navigator.clipboard.writeText(details);

      alert(
        "Order details copied! Paste them into your Messenger chat."
      );
    } catch (error) {
      window.prompt(
        "Copy your order details and paste them into Messenger:",
        details
      );
    }

    if (!messengerWindow) {
      alert(
        "Messenger did not open. Please allow pop-ups or open Messenger manually."
      );
    }
  });

// Prepare an email with optional order details.
document
  .getElementById("sendEmail")
  .addEventListener("click", () => {
    const request =
      document.getElementById("printRequest").value.trim();

    const subject = encodeURIComponent(
      `Printing order: ${request || "File submission"}`
    );

    const body = encodeURIComponent(getOrderDetails());

    // Open the default email app.
    window.location.href =
      `mailto:${SHOP.email}?subject=${subject}&body=${body}`;
  });



