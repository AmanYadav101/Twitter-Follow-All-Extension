import React from "react";
import ReactDOM from "react-dom";

export default defineContentScript({
  matches: ["*://x.com/*"],
  main(ctx) {
    console.log("Hello content.", ctx);
    addButton();
  },
});

const FloatingButton: React.FC = () => {
  const handleClick = () => {
    followAllUsers();
  };

  return (
    <button
      style={{
        position: "fixed",
        bottom: "140px",
        right: "50px",
        padding: "10px 20px",
        zIndex: 10000,
        backgroundColor: "#1da1f2",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      Follow All
    </button>
  );
};

const addButton = (): void => {
  if (document.getElementById("follow-all-btn")) return;

  const buttonContainer = document.createElement("div");
  buttonContainer.id = "follow-all-btn";
  document.body.appendChild(buttonContainer);

  ReactDOM.render(<FloatingButton />, buttonContainer);
};

const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

const followAllUsers = async (): Promise<void> => {
  const forYouTab = document.querySelector<HTMLAnchorElement>(
    'a[href="/i/flow/home"], a[data-testid="AppTabBar_Home_Link"]'
  );

  if (forYouTab) {
    console.log("For You tab found! Switching...");
    // forYouTab.click();
  } else {
    console.error("For You tab not found.");
  }

  await delay(3000);

  const avatars = document.querySelectorAll<HTMLImageElement>(
    '[data-testid="UserCell"] img'
  );

  if (avatars.length === 0) {
    console.log("No avatars found on the page.");
    return;
  }

  console.log(
    `Found ${avatars.length} avatars. Proceeding with follow logic...`
  );

  avatars[0].scrollIntoView({ behavior: "smooth" });
  await delay(500);

  for (let i = 0; i < avatars.length; i++) {
    const avatar = avatars[i];

    avatar.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
    await delay(1000);

    const followButton = Array.from(
      document.querySelectorAll<HTMLButtonElement | HTMLSpanElement>(
        "button, span"
      )
    ).find((el) => el.textContent?.trim() === "Follow");

    if (followButton) {
      console.log(`Following user ${i + 1}!`);
      followButton.click();
      await delay(5000);

      avatar.dispatchEvent(new MouseEvent("mouseout", { bubbles: true }));
      console.log(`Hover pop-up closed for user ${i + 1}.`);
      await delay(500);
    } else {
      console.log(`User ${i + 1} already followed or no follow button.`);

      avatar.dispatchEvent(new MouseEvent("mouseout", { bubbles: true }));
      await delay(500);
    }
  }

  console.log("Follow All completed!");
};
