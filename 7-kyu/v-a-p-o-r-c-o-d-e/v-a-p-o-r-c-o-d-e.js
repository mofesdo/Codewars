function vaporcode(string) {
  return string
    .replace(/\s+/g, '')              // Remove all spaces
    .toUpperCase()                    // Convert to uppercase
    .split('')                        // Split into individual characters
    .join('  ');   
}