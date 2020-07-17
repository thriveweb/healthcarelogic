import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

export default class Hubspot extends React.Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <script src="//js.hsforms.net/forms/v2.js" />
          <script type="text/javascript">
            {`hbspt.forms.create( {portalId: "7321348", formId:
            "0e50fdde-5935-4ff0-bccf-f64ebe99734e", });`}
          </script>
        </Helmet>
        <div className="hubspot">.</div>
      </Fragment>
    )
  }
}
