import xss from 'xss';

// Utility function to sanitize all input strings
export function sanitizeInput(input: string): string {
  return xss(input);
}

// Sanitize an object containing input strings
export function sanitizeObject(obj: Record<string, string>): Record<string, string> {
  const sanitizedObj: Record<string, string> = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      sanitizedObj[key] = sanitizeInput(obj[key]);
    }
  }
  return sanitizedObj;
}
