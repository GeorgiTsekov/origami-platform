import React from 'react';
import renderer from 'react-test-renderer';
import Header from './components/header/header';
import TestingEnvironment from './test-utils/router';

describe('Header Component', () => {
    it('shoult render authenticated routes', () => {
        const tree = renderer.create(
            <TestingEnvironment value={{
                user: {
                    loggedIn: true,
                    id: '123'
                }
            }}>
                <Header />
            </TestingEnvironment>

        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    // it('shout render non-authenticated routes', () => {

    // });
})