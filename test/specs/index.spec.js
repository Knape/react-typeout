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

    it('Should have default random props if none is set', () => {
      const wrapper = mount(<TypeOut words={['one', 'two']} />);
      expect(wrapper.prop('random')).to.eql(false);
    });

    it('Should allow to set the random prop to true', () => {
      const wrapper = mount(<TypeOut words={['one', 'two']} random />);
      expect(wrapper.prop('random')).to.eql(true);
    });

    it('Should have default typeSpeed props if none is set', () => {
      const wrapper = mount(<TypeOut words={['one', 'two']} />);
      expect(wrapper.prop('typeSpeed')).to.eql(200);
    });

    it('Should allow to set the typeSpeed prop to number', () => {
      const wrapper = mount(<TypeOut words={['one', 'two']} typeSpeed={300} />);
      expect(wrapper.prop('typeSpeed')).to.eql(300);
    });

    it('Should have default rewindSpeed props if none is set', () => {
      const wrapper = mount(<TypeOut words={['one', 'two']} />);
      expect(wrapper.prop('rewindSpeed')).to.eql(50);
    });

    it('Should allow to set the rewindSpeed prop to number', () => {
      const wrapper = mount(<TypeOut words={['one', 'two']} rewindSpeed={300} />);
      expect(wrapper.prop('rewindSpeed')).to.eql(300);
    });

    it('Should have default pauseSpeed props if none is set', () => {
      const wrapper = mount(<TypeOut words={['one', 'two']} />);
      expect(wrapper.prop('pauseSpeed')).to.eql(1000);
    });

    it('Should allow to set the pauseSpeed prop to number', () => {
      const wrapper = mount(<TypeOut words={['one', 'two']} pauseSpeed={300} />);
      expect(wrapper.prop('pauseSpeed')).to.eql(300);
    });

    it('Should render text inside component after 1s', (done) => {
      const wrapper = mount(<TypeOut words={['one', 'two']} pauseSpeed={300} />);
      setTimeout(() => {
        expect(wrapper.text().length).to.be.above(0);
        done();
      }, 300);
    });
  });
