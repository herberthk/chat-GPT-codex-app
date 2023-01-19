/**
 * Returns the global CSS classes to apply to the form element based on associated validity.
 */
export const getValidStyle = (isValid?: boolean): string => {
  if (isValid === undefined) {
    return "";
  }

  if (isValid) {
    return "border-green-300";
  }

  return "border-red-400";
};

// generate unique ID for each message div of bot
// necessary for typing text effect for that specific reply
// without unique ID, typing text will work on every element
export const generateUniqueId = () => {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;
};
