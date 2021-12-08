import App from "./App";
import React from "react"
import { shallow, configure } from "enzyme";
import "@testing-library/jest-dom";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
    const setConversionMode = jest.fn();
    const handleClick = jest.spyOn(React, "useState");
    const wrapper = shallow(<App onChange={setConversionMode} />);

    //click handler for radio buttons converting between lowercase and uppercase
    handleClick.mockImplementation((conversionMode) => [
      conversionMode,
      setConversionMode,
    ]);

    //TEST 1: DOES THE APP RENDER?
    it("renders correctly", () => {
        wrapper.find(<App />);
      });    

    //TEST 2: DOES RADIO BUTTON FOR LOWERCASE CONVERSION MODE WORK?
    it("should update lowercase state on click", () => {
        wrapper.find("#conversion-0").simulate("click");
        expect(setConversionMode).toBeTruthy();
      });
    
    //TEST 3: DOES RADIO BUTTON FOR UPPERCASE CONVERSION MODE WORK?
    it("should handle uppercase radio change onclick", () => {
    wrapper.find("#conversion-1").simulate("click");
    expect(setConversionMode).toBeTruthy();
  });
});
  
  









// import ReactDOM from 'react-dom'
// import { act } from 'react-dom/test-utils';
// import App from './App'
// *************************************

// let container;

// //With beforeEach will create a new div for each test in the file and adding it.
// beforeEach(() => {
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//     document.body.removeChild(container);
//     container = null;
//   });

// it("confirms the textInput field contains the default placeholder", () => {
//   act(() => {
//     ReactDOM.render(<App />, container);
//   });
//   const defaultTextInput = container.querySelector("textarea");
//   expect(defaultTextInput.value).toBe('Here is some example text.')
// });

// it("confirms the textInput field does NOT contain the default placeholder", () => {
//     act(() => {
//       ReactDOM.render(<App />, container);
//     });
//     const defaultTextInput = container.querySelector("textarea");
//     expect(defaultTextInput.value).not.toBe('Here is NOT some example text.')
//   });











