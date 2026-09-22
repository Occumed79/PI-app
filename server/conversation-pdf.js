import PDFDocument from 'pdfkit';

function plain(value) {
  return String(value ?? '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\x60([^\x60]+)\x60/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^[-*•]\s+/gm, '• ')
    .replace(/\r/g, '')
    .trim();
}

function niceDate(value) {
  const date = value ? new Date(value) : new Date();
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

function ensureRoom(doc, height = 80) {
  const bottom = doc.page.height - doc.page.margins.bottom;
  if (doc.y + height > bottom) doc.addPage();
}

function roundedCard(doc, x, y, width, height, fill, stroke) {
  doc.save();
  doc.roundedRect(x, y, width, height, 12);
  doc.fillAndStroke(fill, stroke);
  doc.restore();
}

function drawHeader(doc, conversation) {
  doc.font('Helvetica-Bold').fontSize(10).fillColor('#64748b').text('PI CROSSWALK ASSISTANT', { characterSpacing: 1.2 });
  doc.moveDown(0.45);
  doc.font('Helvetica-Bold').fontSize(22).fillColor('#0f172a').text(plain(conversation?.title || 'Saved Conversation'));
  doc.moveDown(0.35);
  doc.font('Helvetica').fontSize(9).fillColor('#64748b')
    .text('Saved conversation · ' + niceDate(conversation?.updatedAt || conversation?.updated_at || conversation?.createdAt));
  doc.moveDown(1);
  doc.moveTo(doc.page.margins.left, doc.y).lineTo(doc.page.width - doc.page.margins.right, doc.y).strokeColor('#e2e8f0').stroke();
  doc.moveDown(1);
}

function drawVisualization(doc, visual) {
  ensureRoom(doc, 90);
  const x = doc.page.margins.left + 18;
  const width = doc.page.width - doc.page.margins.left - doc.page.margins.right - 36;
  const startY = doc.y;
  const title = plain(visual?.title || visual?.type || 'Visualization');
  const subtitle = plain(visual?.subtitle || '');
  const caption = plain(visual?.caption || '');
  const rows = Array.isArray(visual?.data) ? visual.data.slice(0, 8) : [];

  const textParts = [subtitle, caption].filter(Boolean);
  const rowText = rows.map(row => {
    if (!row || typeof row !== 'object') return String(row);
    return Object.entries(row).slice(0, 4).map(([key, value]) => key + ': ' + value).join(' · ');
  });
  const estimated = 54 + (textParts.length * 18) + (rowText.length * 14);
  roundedCard(doc, x, startY, width, estimated, '#f8fafc', '#dbeafe');

  doc.x = x + 14;
  doc.y = startY + 12;
  doc.font('Helvetica-Bold').fontSize(8).fillColor('#2563eb').text('SIGNALGLASS VISUAL', { characterSpacing: 0.9 });
  doc.moveDown(0.25);
  doc.font('Helvetica-Bold').fontSize(12).fillColor('#0f172a').text(title, { width: width - 28 });
  if (subtitle) {
    doc.moveDown(0.2);
    doc.font('Helvetica').fontSize(9).fillColor('#475569').text(subtitle, { width: width - 28 });
  }
  if (caption) {
    doc.moveDown(0.2);
    doc.font('Helvetica-Oblique').fontSize(8.5).fillColor('#64748b').text(caption, { width: width - 28 });
  }
  if (rowText.length) {
    doc.moveDown(0.45);
    for (const row of rowText) {
      doc.font('Helvetica').fontSize(8).fillColor('#334155').text('• ' + row, { width: width - 28 });
    }
  }
  doc.y = startY + estimated + 10;
}

function drawSources(doc, sources) {
  if (!sources.length) return;
  ensureRoom(doc, 70);
  doc.moveDown(0.4);
  doc.font('Helvetica-Bold').fontSize(8).fillColor('#64748b').text('WEB SOURCES', { characterSpacing: 0.8 });
  doc.moveDown(0.25);
  for (const source of sources) {
    ensureRoom(doc, 30);
    doc.font('Helvetica-Bold').fontSize(8.5).fillColor('#0f172a')
      .text('[' + (source.id || '') + '] ' + plain(source.title || 'Source'));
    if (source.url) {
      doc.font('Helvetica').fontSize(7.5).fillColor('#2563eb')
        .text(String(source.url), { link: String(source.url), underline: true });
    }
    doc.moveDown(0.35);
  }
}

function drawMessage(doc, message) {
  const user = message.role === 'user';
  const label = user ? 'YOU' : 'SIGNALGLASS';
  const fill = user ? '#eff6ff' : '#f8fafc';
  const stroke = user ? '#bfdbfe' : '#e2e8f0';
  const labelColor = user ? '#2563eb' : '#7c3aed';
  const x = doc.page.margins.left + (user ? 36 : 0);
  const width = doc.page.width - doc.page.margins.left - doc.page.margins.right - 36;
  const body = plain(message.messageText || message.text || '');
  const measured = doc.font('Helvetica').fontSize(10).heightOfString(body || ' ', { width: width - 28, lineGap: 2 });
  const metaHeight = 26;
  const height = Math.max(58, measured + metaHeight + 22);

  ensureRoom(doc, Math.min(height, 300));
  const startY = doc.y;
  roundedCard(doc, x, startY, width, height, fill, stroke);

  doc.x = x + 14;
  doc.y = startY + 11;
  doc.font('Helvetica-Bold').fontSize(8).fillColor(labelColor).text(label, { characterSpacing: 0.8 });
  const source = !user && message.source ? ' · ' + String(message.source).toUpperCase() : '';
  doc.font('Helvetica').fontSize(7.5).fillColor('#94a3b8')
    .text((niceDate(message.createdAt || message.created_at) || '') + source, { continued: false });
  doc.moveDown(0.45);
  doc.font('Helvetica').fontSize(10).fillColor('#0f172a')
    .text(body || ' ', { width: width - 28, lineGap: 2 });

  doc.y = startY + height + 8;
  doc.x = doc.page.margins.left;

  const visuals = Array.isArray(message.visualizations) ? message.visualizations : [];
  visuals.forEach(visual => drawVisualization(doc, visual));

  const sources = Array.isArray(message.webResearch?.sources) ? message.webResearch.sources : [];
  drawSources(doc, sources);
  doc.moveDown(0.45);
}

export async function buildConversationPdf({ conversation, messages = [] } = {}) {
  return await new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: 'LETTER',
      margins: { top: 54, right: 54, bottom: 54, left: 54 },
      info: {
        Title: plain(conversation?.title || 'PI Crosswalk Assistant Conversation'),
        Author: 'PI Crosswalk Assistant',
        Subject: 'Saved chat transcript',
      },
      bufferPages: true,
    });

    const chunks = [];
    doc.on('data', chunk => chunks.push(chunk));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);

    drawHeader(doc, conversation);
    messages.forEach(message => drawMessage(doc, message));

    const pageRange = doc.bufferedPageRange();
    for (let i = 0; i < pageRange.count; i += 1) {
      doc.switchToPage(i);
      const pageNumber = i + 1;
      const footerY = doc.page.height - 34;
      doc.font('Helvetica').fontSize(7.5).fillColor('#94a3b8')
        .text('PI Crosswalk Assistant', doc.page.margins.left, footerY, { width: 220 });
      doc.text('Page ' + pageNumber + ' of ' + pageRange.count, doc.page.width - doc.page.margins.right - 100, footerY, {
        width: 100,
        align: 'right',
      });
    }

    doc.end();
  });
}
