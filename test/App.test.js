import React from 'react';
import ReactDOM from 'react-dom';
import App, {splitOnRepo} from '../src/App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
});

test('split on repo', () => {
    const result = splitOnRepo([{name: 'aao', repos: ['noot', 'mies']}]);

    expect(result).toHaveLength(2);
});
