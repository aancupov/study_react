import React from 'react';

import { mapValues } from 'lodash/object';
import { assign } from 'lodash';

import classNames from 'classnames';

import PropTypes from 'prop-types';

class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = { errors: {} };
    this.form = {};
    this.onSubmit = this.onSubmit.bind(this);
    this.generateRef = this.generateRef.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    
    this.setState({ errors: {} });
    const values = mapValues(this.form, 'value');

    if (!values.email || values.email.length < 3)
      this.setState(assign(
        {},
        this.state,
        { errors: assign({}, this.state.errors, { email: true }) }
      ));
    alert(JSON.stringify(values));
  }

  generateRef(fieldName) {
    return (input) => { this.form[fieldName] = input; };
  }

  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="ui field">
            <Text 
              label="Full name:"
              id="fullName"
              name="fullName"
              fieldRef={this.generateRef('fullName')}
            />
            <Text 
              label="Email:"
              id="email"
              name="email"
              error={this.state.errors.email}
              fieldRef={this.generateRef('email')}
            />
            <TextArea
              label="Message:"
              id="message"
              name="message"
              fieldRef={this.generateRef('message')}
            />
          </div>  
          <input
            className="ui button primary"
            type="submit"
            value="submit" 
          />
        </form>  
      </div>
    );
  }
}

export default Contacts;

class Text extends React.Component {
  render() {
    const { label, name, fieldRef, error } = this.props;

    return (
      <div className={classNames('ui field', { error })}>
        <label htmlFor={name}>{label}</label>
        <input
          type="text"
          className="ui input"
          id={name}
          name={name}
          ref={fieldRef}
        />
      </div>  
    );
  }
}

Text.propTypes = {
  name:     PropTypes.string,
  fieldRef: PropTypes.string,
  label:    PropTypes.string,
  error:    PropTypes.bool
};

class TextArea extends React.Component {
  render() {
    const { label, name, fieldRef } = this.props;

    return (
      <div className="ui field">
        <label htmlFor={name}>{label}</label>
        <textarea 
          className="ui input"
          id={name}
          name={name}
          ref={fieldRef}
        />
      </div>  
    );
  }
}

TextArea.propTypes = {
  name:     PropTypes.string,
  fieldRef: PropTypes.string,
  label:    PropTypes.string
};
