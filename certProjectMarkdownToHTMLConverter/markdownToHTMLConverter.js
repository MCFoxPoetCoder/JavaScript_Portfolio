const markdownInput = document.getElementById("markdown-input");
const rawHTML = document.getElementById("html-output");
const previewHTML =  document.getElementById("preview");

const h1Regex = /^#\s([\w\s*]*.)$/gm;
const h2Regex = /^#{2}\s([\w\s*]*)$/gm;
const h3Regex = /^#{3}\s([\w\s*]*)$/gm;
const phrase = `[\\w\\s*]*`;
const boldAstRegex = /(?<!\w)[*]{2}([\w *]*)[*]{2}(?!\w)/gm;
const boldUndRegex = /(?<!\w)[_]{2}([\w *]*)[_]{2}(?!\w)/gm;
const italAstRegex = /(?<!\w)[*]{1}([\w *]*)[*]{1}(?!\w)/gm;
const italUndRegex = /(?<!\w)[_]{1}([\w *]*)[_]{1}(?!\w)/gm;
const linkRegex = /\[([-\w\s]*)\]\((\S*)\)/gm;
const imgRegex = /!\[([-\w\s]*)\]\((\S*)\)/gm;
const quoteRegex = /^>\s([-\w *]*)/gm;

function convertMarkdown () {
  const markdown = markdownInput.value;
  let conversion = markdown
  .replaceAll(h1Regex, `<h1>$1</h1>`)
  .replaceAll(h2Regex, `<h2>$1</h2>`)
  .replaceAll(h3Regex, `<h3>$1</h3>`)
  .replaceAll(imgRegex, `<img alt="$1" src="$2">`)
  .replaceAll(linkRegex, `<a href="$2">$1</a>`)
  .replaceAll(quoteRegex, `<blockquote>$1</blockquote>`)
  .replaceAll(boldAstRegex, `<strong>$1</strong>`)
  .replaceAll(boldUndRegex, `<strong>$1</strong>`)
  .replaceAll(italAstRegex, `<em>$1</em>`)
  .replaceAll(italUndRegex, `<em>$1</em>`);
  return conversion
}

markdownInput.addEventListener("input", () => {
  rawHTML.innerText = convertMarkdown();
  previewHTML.innerHTML = rawHTML.innerText
})