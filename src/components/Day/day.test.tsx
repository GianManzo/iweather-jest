import { render, screen } from "@testing-library/react-native";
import { Day } from ".";
import clearDay from "@assets/clear_day.svg";

describe("Component: Day", () => {
  it("should be render day.", () => {
    render(
      <Day
        data={{
          day: "18/7",
          weather: "Sunny",
          max: "30°c",
          min: "20°c",
          icon: clearDay,
        }}
      />
    );
    expect(screen.getByText("18/7")).toBeTruthy();
  });
});
