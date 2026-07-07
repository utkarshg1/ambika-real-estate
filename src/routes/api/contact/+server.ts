import { json, error } from '@sveltejs/kit';
import axios from 'axios';
import { AIRTABLE_API_TOKEN, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME } from '$env/static/private';

export async function POST({ request }) {
  const body = await request.json();
  const { name, company, contact, email, message, timestamp } = body;

  if (!name || !company || !contact) {
    error(400, 'Name, company, and contact are required');
  }

  try {
    const encodedContact = contact.replace(/"/g, '\\"');
    const { data: existing } = await axios.get(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`,
      {
        params: {
          filterByFormula: `{Contact}="${encodedContact}"`,
          maxRecords: 1
        },
        headers: { Authorization: `Bearer ${AIRTABLE_API_TOKEN}` }
      }
    );

    if (existing.records.length > 0) {
      return json({ duplicate: true });
    }

    await axios.post(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`,
      {
        records: [
          {
            fields: {
              Timestamp: timestamp || new Date().toISOString(),
              Name: name,
              Company: company,
              Contact: contact,
              Email: email || 'Not provided',
              Message: message || 'Not provided'
            }
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return json({ success: true });
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('Airtable API error:', JSON.stringify(err.response?.data || err.message));
      error(500, 'Failed to submit form. Please try again or call us directly.');
    } else {
      console.error('Unexpected error:', err);
      error(500, 'Failed to submit form. Please try again or call us directly.');
    }
  }
}
