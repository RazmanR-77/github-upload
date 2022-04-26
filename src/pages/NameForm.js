import React from 'react';

//import   React
//  ReactDom


//////TODOOOO TODO




// declaration
 // export default NameForm;

// export default class
class NameForm extends React.Component {
   
  constructor(props) {

   

      super(props);

    // export default NameForm;
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  
    
  }
 


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  //////TODOOOO TODO
  //   submit name form   


  //  export default 
  render() {  
      return (
        <form onSubmit={this.handleSubmit}>
          
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>

          <input type="submit" value="Submit" />
        </form>
      );

        // export default NameForm;

    }





}