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
  expect(renderedRows).toMatchInlineSnapshot(`
    Array [
      <tr
        data-testid="leaderboard-row"
      >
        <td>
          1
        </td>
        <td>
          $
          100.00
        </td>
        <td>
          Japperales
        </td>
        <td>
          Red Cross
        </td>
        <td>
          <a
            href="https://www.w3schools.com/html/html_links.asp"
            rel="noopener noreferrer"
            target="_blank"
          >
            Link
          </a>
        </td>
      </tr>,
      <tr
        data-testid="leaderboard-row"
      >
        <td>
          2
        </td>
        <td>
          $
          75.00
        </td>
        <td>
          Delitt
        </td>
        <td>
          ASPCA
        </td>
        <td>
          <a
            href="https://www.w3schools.com/html/html_links.asp"
            rel="noopener noreferrer"
            target="_blank"
          >
            Link
          </a>
        </td>
      </tr>,
    ]
  `);
});
