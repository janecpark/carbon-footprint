import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import IncomeForm from './components/IncomeForm';
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
              <IncomeForm />
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
              <IncomeForm />
            </ActionProvider>
          </ResultProvider>
        </FormProvider>
      </UserProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
