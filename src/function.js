import { useState } from "react";
//------------------------------------------------\\
const nameValidator = (e,set) => {
    const value = e.target.value
    if (value === '' || /\d/.test(value)) {
      set(false);
    } else {
      set(true);
      
    }
}

const emailValidator = (e,set) => {
  const emailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const value = e.target.value
  if (value === '' || !emailValidator.test(value)) {
    set(false);
  } else {
    set(true);
    
  }
}


const passwordValidator = (e,set) => {
  const value = e.target.value
  if (value === '' || value.length<8) {
    set(false);
  } else {
    set(true);
  }
}


//Part 2
//------------------------------------------------\\

const adressValidator = (e,set) => {
  const value = e.target.value
  if (value === '') {
    set(false);
  } else {
    set(true);
  }
}

const CEPValidator = (e,set) => {
  const cepVal = /^\d{5}-\d{3}$/
  const value = e.target.value
  if (value.length === 5) e.target.value = value + '-'
  if (value === '' || !cepVal.test(e.target.value)) {
    set(false);
  } else {
    set(true);
    
  }
}

//Part 3

const CPFValidator = (e,set) =>{
  const value = e.target.value;
  if (value.length === 3) e.target.value = value + '.'
  if (value.length === 7) e.target.value = value + '.'
  if (value.length === 11) e.target.value = value + '-'
  if (value === '' || !/\d{3}[.\s]?\d{3}[.\s]?\d{3}[-.\s]?\d{2}/.test(e.target.value)) {
    set(false);
  } else {
    set(true);
   
  }
}

const CellValidator = (e,set) =>{
  const value = e.target.value;
  if(value.length === 1)e.target.value ='(' + e.target.value;
  if (value.length === 3) e.target.value = value + ')'
  if (value.length === 4) e.target.value = value + ' '
  if (value.length === 10) e.target.value = value + '-'
  if (value === '' || !/^\(\d{2}\)\s?\d{6}-\d{4}$/.test(e.target.value)) {
    set(false);
  } else {
    set(true);
  }
}

//Testar igual

const equalValidator = (e,set,equal) => {
  const value = e.target.value
  if (value === '' || value !== equal) {
    set(false);
  } else {
    set(true);
  }
}

export {
  equalValidator,
  nameValidator,
  emailValidator,
  passwordValidator,
  adressValidator,
  CEPValidator,
  CPFValidator,
  CellValidator
};