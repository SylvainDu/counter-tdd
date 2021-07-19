import ButtonComponent from './button-component';
import Enzyme,  { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

test('renders without error', () => {
    const wrapper = shallow(<ButtonComponent />);
    const appComponent = wrapper.find("[data-test='button-component']");
    expect(appComponent.length).toBeTruthy();
});

test('renders the text value', () => {
    const wrapper = shallow(<ButtonComponent />);
    const appComponent = wrapper.find("[data-test='button-component']").text();
    expect(appComponent).toBe('Incrementer');
});
