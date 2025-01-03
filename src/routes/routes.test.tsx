import { render } from "@testing-library/react-native";
import { Routes } from ".";

describe("Routes", () => {
  it("should be render search screen not city selected", () => {
    const { debug } = render(<Routes />);
    debug();
  });
});
