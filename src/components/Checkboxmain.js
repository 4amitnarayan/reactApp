import React, { Component } from 'react';
import Checkbox from './Checkbox';

const items = [
  'Before Breakfast',
  'Before Lunch',
  'Before Dinner',
  'Before Supper',
  'After Breakfast',
  'After Lunch',
  'After Dinner',
  'After Supper'
];

class Checkboxmain extends Component {
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    /*Print the Result In Console*/
    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  }

  createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  )

  createCheckboxes = () => (
    items.map(this.createCheckbox)
  )

  render() {
    return (
        <div className="row">
          <div className="col-sm-8">
            <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
                  <ul className="checkBox-container">
                    {this.createCheckboxes()}
                  </ul>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <button className="btn btn-default" type="submit" className="btn btn-primary">Save</button>
                  </div>
                </div>
            </form>
          </div>
        </div>
    );
  }
}

export default Checkboxmain;
