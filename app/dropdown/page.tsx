'use client'
import React, { useState } from 'react'

const Dropdown = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    const userInput = prompt('Please enter a value:');
    setInputValue(userInput);
  };

  const handleRemoveClick = () => {
    const removeInput = prompt('enter screen to be removed: ');
    setInputValue(removeInput);
  };
  return (
    <div className='flex gap-2 content-center place-content-between'>
      <div className='w-fit h-fit'>
        <select>
          <option value="volvo">Screen 1</option>
          {inputValue && <option value={inputValue}>{inputValue}</option>}
        </select>
      </div>
      <button className='bg-green-200' onClick={handleButtonClick}>
        Add value
      </button>
      <button className='bg-blue-100' onClick={handleRemoveClick}>
        Remove Screen
      </button>
    </div>
  )
}

export default Dropdown

