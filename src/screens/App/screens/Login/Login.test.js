import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Login from './components/Login';
import {
  UserProvider,
  FormProvider,
  ResultProvider,
  ActionProvider,
  TokenProvider,
} from '../testUtils';

it('renders without crashing', function () {
  render(
    <MemoryRouter>
      <UserProvider>
        <FormProvider>
          <ResultProvider>
            <ActionProvider>
              <TokenProvider>
                <Login />
              </TokenProvider>
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
              <TokenProvider>
                <Login />
              </TokenProvider>
            </ActionProvider>
          </ResultProvider>
        </FormProvider>
      </UserProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders text on page', () => {
  const { getByText } = render(
    <MemoryRouter>
      <UserProvider>
        <FormProvider>
          <ResultProvider>
            <ActionProvider>
              <TokenProvider>
                <Login />
              </TokenProvider>
            </ActionProvider>
          </ResultProvider>
        </FormProvider>
      </UserProvider>
    </MemoryRouter>
  );
  const element = getByText(/Username/);
  expect(element).toBeInTheDocument();
});
