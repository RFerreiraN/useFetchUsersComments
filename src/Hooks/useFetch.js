import {useState} from 'react';

export const useFetch = () => {
  return {
    data, 
    isLoading,
    errors
  }
}
