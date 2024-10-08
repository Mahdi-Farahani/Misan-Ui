export const formatNumber = (value: string) => {
  const rawValue = value.replace(/,/g, ""); // Remove commas from the input
  const formattedValue = rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Format the value with commas

  return formattedValue; // Return the formatted value
};
