// import React from 'react';
// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import Table from './Table';

// Enzyme.configure({ adapter: new Adapter() })

// it('renders without crashing', () => {
// 	Enzyme.mount(<Table />);
// });

import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Table />, div);
});