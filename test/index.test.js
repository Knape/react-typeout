/* globals describe, beforeAll, beforeEach, expect, jest */
/* eslint no-unused-expressions: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import TypeOut from '../src';
import { mount } from 'enzyme';

  beforeAll(() => {
    document.body.style.margin = '100px';
    document.body.style.padding = '100px';
    console.warn = jest.genMockFn();
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
    test('Should mount a span component with class react-typeout', () => {
      const wrapper = mount(<TypeOut words={['one', 'two']} />);
      expect(wrapper.hasClass('react-typeout')).toBeTruthy();
    });

    test('Should mount a span component with class react-typeout-test', () => {
      const wrapper = mount(<TypeOut className="react-typeout-test" words={['one', 'two']} />);
      expect(wrapper.hasClass('react-typeout-test')).toBeTruthy();
      expect(wrapper.hasClass('react-typeout')).toBeFalsy();
    });

    test('Should have default random props if none is set', () => {
      const wrapper = mount(<TypeOut words={['one', 'two']} />);
      expect(wrapper.prop('random')).toBeFalsy();
    });

    test('Should allow to set the random prop to true', () => {
      const wrapper = mount(<TypeOut words={['one', 'two']} random />);
      expect(wrapper.prop('random')).toBeTruthy();
    });

    test('Should have default typeSpeed props if none is set', () => {
      const wrapper = mount(<TypeOut words={['one', 'two']} />);
      expect(wrapper.prop('typeSpeed')).toBe(200);
    });

    test('Should allow to set the typeSpeed prop to number', () => {
      const wrapper = mount(<TypeOut words={['one', 'two']} typeSpeed={300} />);
      expect(wrapper.prop('typeSpeed')).toBe(300);
    });

    test('Should have default rewindSpeed props if none is set', () => {
      const wrapper = mount(<TypeOut words={['one', 'two']} />);
      expect(wrapper.prop('rewindSpeed')).toBe(50);
    });

    test('Should allow to set the rewindSpeed prop to number', () => {
      const wrapper = mount(<TypeOut words={['one', 'two']} rewindSpeed={300} />);
      expect(wrapper.prop('rewindSpeed')).toBe(300);
    });

    test('Should have default pauseSpeed props if none is set', () => {
      const wrapper = mount(<TypeOut words={['one', 'two']} />);
      expect(wrapper.prop('pauseSpeed')).toBe(1000);
    });

    test('Should allow to set the pauseSpeed prop to number', () => {
      const wrapper = mount(<TypeOut words={['one', 'two']} pauseSpeed={300} />);
      expect(wrapper.prop('pauseSpeed')).toBe(300);
    });

    test('Should warn if we dont pass any text', () => {
      mount(<TypeOut words={[]} pauseSpeed={300} />);
      expect(console.warn).toHaveBeenCalled();
    });

    test('Should render text inside component after 300ms', (done) => {
      const wrapper = mount(<TypeOut words={['one', 'two']} pauseSpeed={300} />);
      setTimeout(() => {
        expect(wrapper.text().length).toBeGreaterThan(0);
        done();
      }, 300);
    });
  });
