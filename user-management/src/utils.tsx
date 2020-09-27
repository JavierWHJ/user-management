import { UserData } from './type';

export const validateUserData = (userData: UserData) => {
  if(!userData.firstName){
      return false;
  }
  if(!userData.lastName){
      return false;
  }
  if(!userData.email || !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userData.email)){
      return false;
  }
  if(!userData.dob || !/^\d{4}[./-]\d{2}[./-]\d{2}$/.test(userData.dob)){
      return false;
  }
  return true;
}