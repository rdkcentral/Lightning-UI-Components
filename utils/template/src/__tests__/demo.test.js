import React from 'react';
import {{componentNameUpper}} from '../{{component}}';
import renderer from 'react-test-renderer';

describe('{{componentNameUpper}}: ', () => {
  it('renders', () => {
    const tree = renderer.create(<{{componentNameUpper}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
