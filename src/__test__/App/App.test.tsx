import React, { Suspense } from "react";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import { create } from "react-test-renderer";
import App from "../../App";
import Spinner from "../../Components/Spinner";

describe("App component render", () => {
  it("rendered lazily", async () => {
    const root = create(
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    );
    expect(root).toMatchSnapshot();
  });
});
