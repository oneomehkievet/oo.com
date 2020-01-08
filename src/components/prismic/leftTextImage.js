import PropTypes from "prop-types"
import React from "react"
import { RichText } from "prismic-reactjs"

const LeftTextImage = props => {
  return (
    <div className="thisisthebackground">
      <div className="takesuphalfonfullscreen-fullonhalfscreen">
        <RichText render={props.prismic.primary.title} />
        <RichText render={props.prismic.primary.subtitle} />
        <RichText render={props.prismic.primary.text} />
        <RichText render={props.prismic.primary.list_item_1} />
        <RichText render={props.prismic.primary.list_item_2} />
        <RichText render={props.prismic.primary.list_item_3} />
        <RichText render={props.prismic.primary.list_item_4} />
        <RichText render={props.prismic.primary.list_item_5} />
        <RichText render={props.prismic.primary.list_item_6} />
      </div>
    </div>
  )
}

LeftTextImage.propTypes = {
  prismic: PropTypes.object.isRequired,
}

export default LeftTextImage
