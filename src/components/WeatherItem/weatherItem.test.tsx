import { render, screen } from "@testing-library/react-native";
import { WeatherItem } from ".";
import dropIcon from "@assets/drop.svg";

describe("Component: WeatherItem", () => {
  it("should be show title and value", async () => {
    render(
      <WeatherItem icon={dropIcon} title="Sensação térmica" value="81%" />
    );
    const title = screen.getByText("Sensação térmica");
    const value = screen.getByText("81%");
    expect(title).toBeTruthy();
    expect(value).toBeTruthy();
  });
});
