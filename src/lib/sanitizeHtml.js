import sanitizeHtmlLib from 'sanitize-html';

export function sanitizeContent(html) {
  if (!html) {
    return '';
  }

  return sanitizeHtmlLib(html);
}

export function sanitizedHtml(html) {
  return { __html: sanitizeContent(html) };
}
