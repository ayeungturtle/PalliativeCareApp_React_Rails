import React, { Component } from 'react';
import { Form, Text, Radio, RadioGroup, Select, Checkbox, TextArea } from 'react-form';
import './App.css';


  const statusOptions = [
    {
      label: 'Parent',
      value: 'parent'
    },
    {
      label: 'Legal Guardian',
      value: 'legalGuardian'
    },
    {
      label: "Family/Other",
      value: 'familyOther'
    }
  ];

  class AdultForm extends Component {

    constructor( props ) {
      super( props );
      this.state = {};
    }

    render() {
      return (
        <div>
          <Form onSubmit={submittedValues => this.setState( { submittedValues } )}>
            { formApi => (
              <form onSubmit={formApi.submitForm} id="form2">
                <div>
                  <Text className="Input" field="firstName" id="firstName" placeholder="First Name"/>
                  <Text className="Input" field="lastName" id="lastName" placeholder="Last Name"/>
                </div>
                <div>
                <Text className="Input" field="phone" id="phone" placeholder="Phone Number"/>
                </div>
                <div>
                <Text className="Input" field="email" id="email" placeholder="Email"/>
                </div>
                <div>
                  <Text className="Input" field="addressStreet" id="addressStreet" placeholder="Street Address"/>
                  <Text className="Input" field="addressCity" id="addressCity" placeholder="City"/>
                </div>
                <div>
                  <Text className="Input" field="addressState" id="addressState" placeholder="State"/>
                  <Text className="Input" field="addressZip" id="addressZip" placeholder="Zip"/>
                </div>
                <div>
                  <label className="Input" htmlFor="status">Relation to Child</label>
                  <Select field="status" id="status" options={statusOptions} />
                </div>
                <button type="submit" className="Submit">Submit</button>
              </form>
            )}
          </Form>
        </div>
      );
    }
  }

export default AdultForm;