import { render, screen } from "@testing-library/react-native";
import { NextDays } from ".";
import { mockNextDay } from "@__tests__/mocks/components/mockNextDay";

describe("NextDays", () => {
  it("should be render next days", () => {
    render(<NextDays data={mockNextDay} />);
    expect(screen.getByText("18/7")).toBeTruthy();
  });
});
