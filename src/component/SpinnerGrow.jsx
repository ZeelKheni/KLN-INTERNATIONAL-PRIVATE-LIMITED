import React from 'react';
import { useNavigate } from 'react-router-dom';

const SpinnerGrow = ({ to = '/new-page' }) => {
  const navigate = useNavigate();

  return (
    <div className='absolute top-28 right-1/4 lg:top-1/4 lg:right-1/4 z-50'>
      <div
        onClick={() => navigate(to)}
        className="relative cursor-pointer inline-block w-8 h-8"
        role="status"
      >
        <div className="animate-[grow_0.75s_linear_infinite] absolute w-full h-full rounded-full bg-blue-600 opacity-0">
          <span className="sr-only">Loading...</span>
        </div>
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm text-blue-600 animate-[pulse_0.5s_ease-in-out_infinite]">
          Click here
        </span>
      </div>
    </div>
  );
};

export default SpinnerGrow;