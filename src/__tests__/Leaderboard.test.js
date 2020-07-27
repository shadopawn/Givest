import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, cleanup } from "@testing-library/react";
import Leaderboard from "../components/Leaderboard";

afterEach(cleanup)

test("renders Leaderboard rows", () => {
  const testRows = [
    {
      donationAmount: 100.0,
      name: "Japperales",
      charity: "Red Cross",
      customLink: "https://www.w3schools.com/html/html_links.asp",
    },
    {
      donationAmount: 75.0,
      name: "Delitt",
      charity: "ASPCA",
      customLink: "https://www.w3schools.com/html/html_links.asp",
    },
  ];
  const { getAllByTestId } = render(<Leaderboard rows={testRows} />);
  const renderedRows = getAllByTestId("leaderboard-row");
  expect(renderedRows).toMatchSnapshot();
});
