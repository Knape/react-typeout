import React from 'react';
import ReactDOM from 'react-dom';
import TypeOut from '../../src';
import { mount } from 'enzyme';

  before(() => {
    document.body.style.margin = '100px';
    document.body.style.padding = '100px';
  });

  let div;

  beforeEach(() => {
    div = document.createElement('div');
    document.body.appendChild(div);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
    div.parentNode.removeChild(div);
    window.scrollTo(0, 0);
  });


  describe('TypeOut', () => {
    it('Should mount a span component with class react-typeout', () => {
      const wrapper = mount(<TypeOut words={['one', 'two']} />);
      expect(wrapper.hasClass('react-typeout')).to.eql(true);
    });

    it('Should mount a span component with class react-typeout-test', () => {
      const wrapper = mount(<TypeOut className="react-typeout-test" words={['one', 'two']} />);
      expect(wrapper.hasClass('react-typeout-test')).to.eql(true);
      expect(wrapper.hasClass('react-typeout')).to.eql(false);
    });
  });


  // it('Component should have length of 2', () => {
  //     expect(wrapper.find('div').children().length).to.have.length(2)
  // })
