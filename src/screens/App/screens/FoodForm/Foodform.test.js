import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import FoodForm from './components/FoodForm';
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
              <FoodForm />
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
              <FoodForm />
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
              <FoodForm />
            </ActionProvider>
          </ResultProvider>
        </FormProvider>
      </UserProvider>
    </MemoryRouter>
  );
  const element = getByText(/Get results/);
  expect(element).toBeInTheDocument();
});

test('Full app navigating when button is clicked', () =>{
  const { getByText } = render(
    <MemoryRouter>
      <UserProvider>
        <FormProvider>
          <ResultProvider>
            <ActionProvider>
              <FoodForm />
            </ActionProvider>
          </ResultProvider>
        </FormProvider>
      </UserProvider>
    </MemoryRouter>
  );
  const btn = getByText('Get results')
  fireEvent.click(btn)
  expect(screen.getByText(/No results/)).toBeInTheDocument()
})