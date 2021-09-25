import { mount } from "enzyme";
import DogClara from "../DogClara/DogClara";

describe("DogClara", () => {
  test("shold render the button Criar dog clara", () => {
    const wrapper = mount(<DogClara name="fred" />);
    expect(wrapper.find("button")).toHaveLength(1);
    expect(wrapper.find("button").first().text()).toEqual("Criar dog clara ");
  });

  test("If I click at the button shold show fred_clara span", () => {
    const wrapper = mount(<DogClara name="fred" />);

    wrapper.find("button").simulate("click");

    expect(wrapper.find("span")).toHaveLength(1);
    expect(wrapper.find("span").first().text()).toEqual("fred_clara");
  });

  test("If I click twice at the button shold not show fred_clara span", () => {
    const wrapper = mount(<DogClara name="fred" />);

    wrapper.find("button").simulate("click");

    expect(wrapper.find("span")).toHaveLength(1);
    expect(wrapper.find("span").first().text()).toEqual("fred_clara");

    wrapper.find("button").simulate("click");

    expect(wrapper.find("span")).toHaveLength(0);
  });
});
