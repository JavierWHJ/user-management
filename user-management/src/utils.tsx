import React from 'react';
import { UserData } from './type';

export const ErrorMsg = ({ warning, item }: {warning: string, item: string}) => {
    let error = '';
    switch (warning) {
      case 'empty':
        error = item + ' cannot be empty!';
        break;
      case 'match':
        error = item + ' does not match!';
        break;
      case 'invalid':
        error = item + ' is invalid!';
        break;
      default:
        break;
    }
    return <small className='text-danger'>{error}</small>;
};

export const validateUserData = (userData: UserData) => {
  if(!userData.firstName || !/^[a-zA-Z]+$/.test(userData.firstName)){
      return false;
  }
  if(!userData.lastName || !/^[a-zA-Z]+$/.test(userData.lastName)){
      return false;
  }
  if(!userData.email || !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(userData.email)){
      return false;
  }
  if(!userData.dob || !/^\d{4}[./-]\d{2}[./-]\d{2}$/.test(userData.dob)){
      return false;
  }
  return true;
}