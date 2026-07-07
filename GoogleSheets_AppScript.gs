/**
 * Google Apps Script for Ambika Real Estate Contact Form
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://sheets.google.com and create a new spreadsheet
 * 2. Name the sheet "Sheet1" (default)
 * 3. Add headers in Row 1: Timestamp, Name, Company, Contact, Email, Message
 * 4. Go to Extensions → Apps Script
 * 5. Paste this entire code
 * 6. Click Deploy → New Deployment
 * 7. Choose "Web app" as type
 * 8. Set "Execute as" → "Me"
 * 9. Set "Who has access" → "Anyone"
 * 10. Click Deploy
 * 11. Copy the Web App URL
 * 12. Paste it in your .env file as PUBLIC_GOOGLE_SHEETS_URL
 */

const SHEET_NAME = 'Sheet1';

function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      throw new Error(`Sheet "${SHEET_NAME}" not found`);
    }

    const params = e.parameter;
    const timestamp = new Date();
    const name = params.Name || '';
    const company = params.Company || '';
    const contact = params.Contact || '';
    const email = params.Email || 'Not provided';
    const message = params.Message || 'Not provided';

    sheet.appendRow([timestamp, name, company, contact, email, message]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'OK', message: 'Ambika Real Estate contact form endpoint' }))
    .setMimeType(ContentService.MimeType.JSON);
}
