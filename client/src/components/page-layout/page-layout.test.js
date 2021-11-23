import React from 'react';
import renderer from 'react-test-renderer';
import TestingEnvironment from '../../test-utils/router';
import PageLayout from './page-layout';

jest.mock('../header/header', () => 'Header');
jest.mock('../aside/aside', () => 'Aside');
jest.mock('../footer/footer', () => 'Footer');

describe('PageLayout Component', () => {
    it('shoult render pagelayout component', () => {
        const tree = renderer.create(
            <TestingEnvironment value={{
                user: {
                    loggedIn: true,
                    id: '123'
                }
            }}>
                <PageLayout />
            </TestingEnvironment>

        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});