export default function (input) {
  if (typeof input !== "string") {
    throw new TypeError(`Slug input text is not a string: ${typeof str}`);
  }
  //  any non alphanum character: g == global i == case INsensitive and accomodate special characters
  const slugRegex = /[^a-zA-Z0-9\-\u00C0-\u017F]+/gi;

  const slug = input.replace(slugRegex, "-").toLowerCase();
  console.log(slug);
  return slug.replace(/-+/g, "-").trim("-");
}