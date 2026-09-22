function isTableDivider(line) {
  const cells = splitTableRow(line);
  return cells.length > 0 && cells.every(cell => /^:?-{3,}:?$/.test(cell.trim()));
}

export function splitTableRow(line) {
  let value = String(line || '').trim();
  if (value.startsWith('|')) value = value.slice(1);
  if (value.endsWith('|')) value = value.slice(0, -1);
  return value.split('|').map(cell => cell.trim());
}

export function parseMessageBlocks(text) {
  const lines = String(text || '').replace(/\r\n?/g, '\n').split('\n');
  const blocks = [];

  for (let index = 0; index < lines.length;) {
    const line = lines[index];
    const nextLine = lines[index + 1];
    if (line.includes('|') && nextLine?.includes('|') && isTableDivider(nextLine)) {
      const headers = splitTableRow(line);
      const rows = [];
      index += 2;
      while (index < lines.length && lines[index].includes('|') && lines[index].trim()) {
        const cells = splitTableRow(lines[index]);
        rows.push(headers.map((_, cellIndex) => cells[cellIndex] || ''));
        index += 1;
      }
      blocks.push({ type: 'table', headers, rows });
      continue;
    }

    const trimmed = line.trim();
    if (!trimmed) blocks.push({ type: 'spacer' });
    else {
      const heading = trimmed.match(/^#{1,3}\s+(.+)$/);
      const bullet = trimmed.match(/^[-*•]\s+(.+)$/);
      const numbered = trimmed.match(/^(\d+)\.\s+(.+)$/);
      if (heading) blocks.push({ type: 'heading', text: heading[1] });
      else if (bullet) blocks.push({ type: 'bullet', text: bullet[1] });
      else if (numbered) blocks.push({ type: 'numbered', number: numbered[1], text: numbered[2] });
      else blocks.push({ type: 'paragraph', text: trimmed });
    }
    index += 1;
  }

  return blocks;
}
