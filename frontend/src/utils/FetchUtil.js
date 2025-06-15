export async function fetchCompanies() {
    const response = await fetch('http://localhost:3001/api/companies');
    if (!response.ok) throw new Error('Failed to fetch companies');
    return response.json();
}