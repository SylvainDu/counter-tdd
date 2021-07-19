import App from './App';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { describe } from 'jest-circus';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('AppComponent', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  const findByTestAttr = (wrapper: ShallowWrapper, value: string): ShallowWrapper => {
    return wrapper.find(`[data-test='${value}']`)
  };

  test.each([
    {
      testName: 'render without error',
      wrapperName: 'component-app'
    },
    {
      testName: 'renders counter display',
      wrapperName: 'counter-display'
    }
  ])('$testName', ({testName, wrapperName}) => {
    const component = findByTestAttr(wrapper, wrapperName);
    expect(component.length).toBeTruthy();
  });

  test('counter display start at 0', () => {
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe("0")
  });

  test('clicking button increment counter display', () => {
    const button = findByTestAttr(wrapper, 'button-component-increment');
    button.simulate('click');
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe("1")
  });

  test('clicking button increment counter display', () => {
    const button = findByTestAttr(wrapper, 'button-component-decrement');
    button.simulate('click');
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe("0")
  });

  test('clicking button increment counter display', () => {
    const button = findByTestAttr(wrapper, 'button-component-decrement');
    button.simulate('click');
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe("0")
  });
});
