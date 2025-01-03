import { render, screen } from "@testing-library/react-native";
import { Day } from ".";
import clearDay from "@assets/clear_day.svg";
import { mockNextDay } from "@__tests__/mocks/components/mockNextDay";

describe("Component: Day", () => {
  it("should be render day.", () => {
    render(<Day data={mockNextDay[0]} />);
    expect(screen.getByText("18/7")).toBeTruthy();
  });
});
