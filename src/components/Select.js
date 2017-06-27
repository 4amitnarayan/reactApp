import React, { Component } from 'react';


class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numofTimes: 1,
      duration: 'Month'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    /*Print the Result In Console*/
    console.log('Number of Times: ' + this.state.numofTimes + ' Duration: ' + this.state.duration);
    event.preventDefault();
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-8">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group tabTwoSpace">
            <div className="row">
              <div className="col-sm-3">
                    <input
                      name="numofTimes"
                      type="number"
                      className="form-control"
                      checked={this.state.numofTimes}
                      onChange={this.handleInputChange} pattern="[0-9]*" min="0"  max="8"/>
                </div>
                <div className="col-sm-2">
                  <span> times </span>
                </div>
                <div className="col-sm-3">
                    <select
                      name="duration"
                      className="form-control"
                      value={this.state.duration}
                      onChange={this.handleInputChange}>
                        <option value="Month">Month</option>
                        <option value="Weeks">Weeks</option>
                        <option value="Days">Days</option>
                      </select>
                  </div>
                </div>
            </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input type="submit" value="Submit" className="btn btn-primary" />
                </div>
              </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Select;
