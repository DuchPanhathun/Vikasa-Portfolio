/**
 * Converts HTML content to plain text with proper formatting
 * @param html - The HTML string to convert
 * @returns Plain text representation of the HTML
 */
export function htmlToText(html: string): string {
  if (!html) return '';
  
  // Create a temporary div element to parse HTML
  if (typeof window !== 'undefined') {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    
    // Handle specific HTML elements for better formatting
    // Convert headings to text with emphasis
    const headings = tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(heading => {
      const textContent = heading.textContent || '';
      heading.replaceWith(document.createTextNode('\n' + textContent + '\n'));
    });
    
    // Convert list items to text with bullets
    const listItems = tempDiv.querySelectorAll('li');
    listItems.forEach(li => {
      const textContent = li.textContent || '';
      li.replaceWith(document.createTextNode('• ' + textContent.replace(/^-\s*/, '') + '\n'));
    });
    
    // Convert paragraphs to text with line breaks
    const paragraphs = tempDiv.querySelectorAll('p');
    paragraphs.forEach(p => {
      const textContent = p.textContent || '';
      if (textContent.trim()) {
        p.replaceWith(document.createTextNode(textContent + '\n\n'));
      } else {
        p.remove();
      }
    });
    
    // Get the final text content
    let text = tempDiv.textContent || tempDiv.innerText || '';
    
    // Clean up extra whitespace and line breaks
    text = text
      .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove excessive line breaks
      .replace(/^\s+|\s+$/g, '') // Trim start and end
      .replace(/\s+/g, ' ') // Normalize spaces
      .replace(/\n\s+/g, '\n') // Remove spaces after line breaks
      .replace(/\s+\n/g, '\n'); // Remove spaces before line breaks
    
    return text;
  }
  
  // Server-side fallback - basic HTML stripping
  return html
    .replace(/<[^>]*>/g, '') // Remove all HTML tags
    .replace(/&nbsp;/g, ' ') // Convert non-breaking spaces
    .replace(/&amp;/g, '&') // Convert HTML entities
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
}

/**
 * Converts HTML to formatted text with preserved structure for display
 * @param html - The HTML string to convert
 * @returns Formatted text with line breaks preserved
 */
export function htmlToFormattedText(html: string): string {
  if (!html) return '';
  
  // Server-side and client-side compatible approach
  let text = html;
  
  // Convert common HTML elements to formatted text
  text = text
    .replace(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi, '\n$1\n') // Headings
    .replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n\n') // Paragraphs
    .replace(/<li[^>]*>(.*?)<\/li>/gi, '• $1\n') // List items
    .replace(/<ul[^>]*>|<\/ul>/gi, '\n') // Remove ul tags
    .replace(/<ol[^>]*>|<\/ol>/gi, '\n') // Remove ol tags
    .replace(/<br\s*\/?>/gi, '\n') // Line breaks
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, '$1') // Bold text
    .replace(/<em[^>]*>(.*?)<\/em>/gi, '$1') // Italic text
    .replace(/<span[^>]*>(.*?)<\/span>/gi, '$1') // Span content
    .replace(/<[^>]*>/g, '') // Remove remaining HTML tags
    .replace(/&nbsp;/g, ' ') // Convert non-breaking spaces
    .replace(/&amp;/g, '&') // Convert HTML entities
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove excessive line breaks
    .replace(/^\s+|\s+$/g, '') // Trim
    .replace(/^-\s*/gm, '• '); // Convert dashes to bullets
  
  return text;
}
