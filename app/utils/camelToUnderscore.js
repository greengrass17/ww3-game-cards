export const camelToUnderscore = camelText => {
  let underscoreText = camelText;
  underscoreText = camelText.split(/(?=[A-Z])/);
  underscoreText = underscoreText.map(text => text.toLowerCase()).join('_');
  return underscoreText;
}

export default camelToUnderscore;