import * as React from "react";
import { ShallowWrapper, shallow } from "enzyme";
import renderer from "react-test-renderer";
import Search from "..";

describe("Search", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // test("setting input field correctly", () => {
  //   const event = {
  //     currentTarget: { value: "test" },
  //   } as React.ChangeEvent<HTMLInputElement>;
  //   const name = wrapper.find('[id="username"]');
  //   name.prop("onChange")!(event);
  //   expect(name.text()).toBe("test");
  // });

  // test("enable button when username typed", () => {
  //   const event = {
  //     currentTarget: { value: "test" },
  //   } as React.ChangeEvent<HTMLInputElement>;
  //   const name = wrapper.find('[id="username"]');
  //   const button = wrapper.find(".button-primary");
  //   name.prop("onChange")!(event);
  //   expect(button.prop("disabled")).toBe(false);
  // });
});
