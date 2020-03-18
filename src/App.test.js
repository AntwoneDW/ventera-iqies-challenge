import React from 'react';
import { render, queryByAttribute, fireEvent} from '@testing-library/react';
import App from './App';

const setup = () => {
  const {getByLabelText, getByText} = render(<App />)
  const input = getByLabelText('teachInput');
  const student_input = getByLabelText('student-input');
  const result = getByLabelText('result-display');
  return {
    input, result,student_input
  }
}

test('Test For Correct', () => {
  console.log("***********************************");
  const { input, result, student_input} = setup();
  fireEvent.change(input, { target: { value: '23' } });
  fireEvent.change(student_input, { target: { value: '23' } });
  expect(result.textContent == 'CORRECT');
});

test('Test For Incorrect', () => {
  console.log("***********************************");
  const { input, result} = setup();
  fireEvent.change(input, { target: { value: '23' } });
  expect(result.textContent == 'INCORRECT');
});
