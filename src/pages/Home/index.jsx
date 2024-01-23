import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setStep, setPersonalInfo } from './action';

import PersonalInfo from './components/PersonalInfo';
import SelectPlans from './components/SelectPlans';
import AddOns from './components/AddOns';
import Summary from './components/Summary';
import ThankYou from './components/ThankYou';

import classes from './style.module.scss';

export default function Home() {
    const dispatch = useDispatch();

    const currentStep = useSelector((state) => state.homeReducer.step);
    const userDataState = useSelector((state) => state.homeReducer.userData);

    console.log(currentStep, '<<STEP')
    console.log(userDataState, '<<USER DATA')

    const renderComponents = () => {
        switch(currentStep) {
          case 1: 
            return <PersonalInfo />
          case 2:
            return <SelectPlans />
          case 3: 
            return <AddOns />
          case 4:
            return <Summary />
          case 5:
            return <ThankYou /> 
        }
    }

  return (
    <div>
        {renderComponents()}
    </div>
  )
}
