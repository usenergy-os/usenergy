'use server';

export async function submitAdminForm(prevState, formData) {
  // Extract form fields
  const name = formData.get('name');
  const email = formData.get('email');
  const startupName = formData.get('startupName');
  const description = formData.get('description');

  // Input Validation
  if (!name || !email) {
    return { success: false, message: 'Name and Email are required.' };
  }

  try {
    // TODO: Connect this back to Airtable or new Supabase Schema
    // For now, logging the data to simulate database insertion
    console.log('--- NEW CATALYNQ SUBMISSION ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Startup: ${startupName}`);
    console.log(`Description: ${description}`);
    console.log('-------------------------------');

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true, message: 'Submission successful! Welcome to the ecosystem.' };
  } catch (error) {
    console.error('Submission failed:', error);
    return { success: false, message: 'Server error. Please try again.' };
  }
}
