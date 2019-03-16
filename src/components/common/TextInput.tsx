import React from 'react';

const styles = {
  TextInput: {
    margin: '8px 0',
    padding: '5px',
    width: '100%'
  }
};

const TextInput = (props: any) => {
  const { label, name, value, handleInputChange } = props;
  return (
    <div>
      <label htmlFor={name}>{ label }</label>
        <input 
          type="text" 
          style={ styles.TextInput }
          name={name} 
          value={value} 
          onChange={handleInputChange} />
    </div>
  );
};

export default TextInput;

type TextInputProps = { label: string, name: string, value: any, handleInputChange: any };