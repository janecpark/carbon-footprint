import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Login from './components/Login';
import {
  UserProvider,
  FormProvider,
  ResultProvider,
  ActionProvider,
} from '../testUtils';

it('renders without crashing', function () {
  render(
    <MemoryRouter>
      <UserProvider>
        <FormProvider>
          <ResultProvider>
            <ActionProvider>
              <Login />
            </ActionProvider>
          </ResultProvider>
        </FormProvider>
      </UserProvider>
    </MemoryRouter>
  );
});

it('matches snapshot', function () {
  const { asFragment } = render(
    <MemoryRouter>
      <UserProvider>
        <FormProvider>
          <ResultProvider>
            <ActionProvider>
              <Login />
            </ActionProvider>
          </ResultProvider>
        </FormProvider>
      </UserProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
