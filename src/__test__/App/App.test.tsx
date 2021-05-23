import * as React from "react";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";

it("navigates home when you click the logo", () => {
  const root = document.createElement("div");
  document.body.appendChild(root);

  // Render app
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>,
    root
  );

  // Interact with page
  act(() => {
    const goHomeLink = document.querySelector(".navigation-title");
    // Click it
    goHomeLink &&
      goHomeLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  const searchContainer = document.querySelector(".search-container");
  expect(searchContainer && searchContainer.children.length).toBe(1);
});
