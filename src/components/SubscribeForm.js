import React from 'react'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

import './EnquiryForm.css'
import './SubscribeForm.css'

class SubscribeForm extends React.Component {
  static defaultProps = {
    name: 'Subscribe Form',
    subject: '', // optional subject of the notification email
    action: '',
    successMessage: 'Success! You are subscribed.',
    errorMessage: 'There is a problem, you have not subscribed to our list.'
  }

  state = {
    alert: '',
    disabled: false,
    success: false
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.disabled) return

    const form = e.target
    const data = serialize(form)
    this.setState({ disabled: true })
    fetch(form.action + '?' + stringify(data), {
      method: 'POST'
    })
      .then(res => {
        if (res.ok) {
          return res
        } else {
          throw new Error('Network error')
        }
      })
      .then(() => {
        form.reset()
        this.setState({
          success: true,
          disabled: true
        })
      })
      .catch(err => {
        console.error(err)
        this.setState({
          disabled: false,
          alert: this.props.errorMessage
        })
      })
  }

  render() {
    const { name, subject, action } = this.props

    return (
      <div className="SubscribeForm-wrap">
        {this.state.success && (
          <div className="">{this.props.successMessage}</div>
        )}
        {!this.state.success && (
          <form
            className="SubscribeForm"
            name={name}
            action={action}
            onSubmit={this.handleSubmit}
            data-netlify="true"
            data-netlify-honeypot="confirmEmail"
          >
            {this.state.alert && (
              <div className="EnquiryForm--Alert">{this.state.alert}</div>
            )}
            <label className="EnquiryForm--Label">
              <input
                type="First name"
                placeholder="First name"
                name="First name"
                required
              />
              <input
                type="Last name"
                placeholder="Last name"
                name="Last name"
                required
              />
              <input type="email" placeholder="Email" name="email" required />

              <input
                type="Organisation"
                placeholder="Organisation"
                name="Organisation"
                required
              />
              <input
                type="Role in company"
                placeholder="Role in company"
                name="Role in company"
                required
                class="role-in-company"
              />
            </label>
            <input
              type="text"
              name="confirmEmail"
              style={{ display: 'none' }}
            />
            {!!subject && (
              <input type="hidden" name="subject" value={subject} />
            )}
            <input type="hidden" name="form-name" value={name} />
            <input
              className="Button"
              type="submit"
              value="Submit"
              placeholder="Submit"
              disabled={this.state.disabled}
            />
          </form>
        )}
      </div>
    )
  }
}

export default SubscribeForm
