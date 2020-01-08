import PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"
import LeftTextImage from "./prismic/leftTextImage"
import SimpleCTA from "./prismic/simpleCTA"

export const query = graphql`
  query GenericPageQuery($uid: String) {
    prismic {
      allGeneric_pages(uid: $uid) {
        edges {
          node {
            _meta {
              uid
            }
            body {
              ... on PRISMIC_Generic_pageBodyLeft_text_image {
                type
                label
                primary {
                  title
                  subtitle
                  text
                  background_image
                  background_color
                  list_item_1
                  list_item_2
                  list_item_3
                  list_item_4
                  list_item_5
                  list_item_6
                }
              }
              ... on PRISMIC_Generic_pageBodySimple_cta_section {
                type
                label
                primary {
                  header
                  text
                  cta_button_text
                }
              }
            }
          }
        }
      }
    }
  }
`

const GenericPage = props => {
  const doc = props.data.prismic.allGeneric_pages.edges.slice(0, 1).pop()
  if (!doc) {
    return <div>Uh oh 404: page not found!</div>
  }
  console.log(doc)
  const pageComposition = doc.node.body.map((ele, i) => {
    switch (ele.type) {
      case "left_text_image":
        return <LeftTextImage key={i} prismic={ele} />
      case "simple_cta_section":
        return <SimpleCTA key={i} prismic={ele} />
      default:
        return <div></div>
    }
  })

  return <div>{pageComposition}</div>
}

GenericPage.propTypes = {
  data: PropTypes.object.isRequired,
}

GenericPage.defaultProps = {
  foo: "",
}
export default GenericPage
