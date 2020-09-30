import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import HouseholdForm from './components/HouseholdForm';
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
              <HouseholdForm />
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
              <HouseholdForm />
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
              <HouseholdForm />
            </ActionProvider>
          </ResultProvider>
        </FormProvider>
      </UserProvider>
    </MemoryRouter>
  );
  const element = getByText(/How many/);
  expect(element).toBeInTheDocument();
});
