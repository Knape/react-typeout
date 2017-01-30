import React from 'react';
import ReactDOM from 'react-dom';
import TyoeOut from '../../src';
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
    it('Should just pass for now', () => {
      expect(true).to.eql(true);
    });
  });


  // it('Component should have length of 2', () => {
  //     expect(wrapper.find('div').children().length).to.have.length(2)
  // })
