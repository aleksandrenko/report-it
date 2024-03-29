// @flow
import React from 'react';
import TakePhoto from './steps/TakePhoto';
import SelectCatgory from './steps/SelectCategory';
import ChooseLocation from './steps/ChooseLocation';
import SubmitReport from './steps/SubmitReport';

import './style.css';

type Props = {
  history: any,
  location: any
};

type State = {};

class Component extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1
    };
  }

  onStepCompleted = () => {
    this.setState({
      currentStep: this.state.currentStep + 1
    });
  };

  onReportSubmit = () => {
    console.log('submit');
    this.setState({
      currentStep: 1
    });
  };

  steps = [
    {
      component: TakePhoto,
      completeHandler: this.onStepCompleted
    },
    {
      component: SelectCatgory,
      completeHandler: this.onStepCompleted
    },
    {
      component: ChooseLocation,
      completeHandler: this.onStepCompleted
    },
    {
      component: SubmitReport,
      completeHandler: this.onReportSubmit
    }
  ];

  render() {
    const SelectedStep = this.steps[this.state.currentStep-1];
    const SelectedStepComponent = this.steps[this.state.currentStep-1].component;

    return (
      <section className="report">
        <SelectedStepComponent onComplete={SelectedStep.completeHandler} />
      </section>
    );
  }
}

export default Component;
