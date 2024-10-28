import React from 'react';

// Define the type for props
interface IntroTextProps {
  heading: string;
  paraText: string;
}

const IntroText: React.FC<IntroTextProps> = ({ heading, paraText }) => {
  return (
    <div className='space-y-6 max-w-4xl '>
      <h2 className='text-4xl'>{heading}</h2>
      <p className='text-lg lg:text-xl leading-relaxed'>{paraText}</p>
    </div>
  );
};

export default IntroText;
