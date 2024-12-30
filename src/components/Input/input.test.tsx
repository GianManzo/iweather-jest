import { render, screen } from "@testing-library/react-native";
import { Input } from "./index";

describe("Component: Input", () => {
  it("should be render without activity indicator", () => {
    render(<Input />);
    const acitivityIndicator = screen.queryByTestId("activity-indicator");
    expect(acitivityIndicator).toBeNull();
  });
  it("should be render with activity indicator", () => {
    render(<Input isLoading />);
    const acitivityIndicator = screen.getByTestId("activity-indicator");
    expect(acitivityIndicator).toBeTruthy();
  });
});
