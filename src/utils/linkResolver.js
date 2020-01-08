export const linkResolver = doc => {
  // URL for a category type
  if (doc.type === "generic_page") {
    return `/page/${doc.uid}`
  }
  // Backup for all other types
  return "/"
}
