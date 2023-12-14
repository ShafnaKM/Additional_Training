import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Hello shafna", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello shafna/i);
  expect(linkElement).toBeInTheDocument();
});
