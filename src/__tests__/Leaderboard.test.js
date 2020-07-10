import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, cleanup } from "@testing-library/react";
import Leaderboard from "../components/Leaderboard";

afterEach(cleanup)

test("renders Leaderboard rows", () => {
  const testRows = [
    {
      position: 1,
      dollarAmmount: 100.0,
      name: "Japperales",
      charity: "Red Cross",
      linkURL: "https://www.w3schools.com/html/html_links.asp",
    },
    {
      position: 2,
      dollarAmmount: 75.0,
      name: "Delitt",
      charity: "ASPCA",
      linkURL: "https://www.w3schools.com/html/html_links.asp",
    },
  ];
  const { getAllByTestId } = render(<Leaderboard rows={testRows} />);
  const renderedRows = getAllByTestId("leaderboard-row");
  expect(renderedRows).toMatchSnapshot();
});
