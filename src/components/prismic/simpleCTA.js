import PropTypes from "prop-types"
import React from "react"
import { RichText } from "prismic-reactjs"

const SimpleCTA = props => {
  return (
    <div>
      <RichText render={props.prismic.primary.header} />
      <RichText render={props.prismic.primary.text} />
      <button>
        <RichText render={props.prismic.primary.cta_button_text} />
      </button>
    </div>
  )
}

SimpleCTA.propTypes = {
  prismic: PropTypes.object.isRequired,
}

SimpleCTA.defaultProps = {
  foo: "",
}
export default SimpleCTA
