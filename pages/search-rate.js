import { useState } from 'react';

export default function SearchRate() {
  const [form, setForm] = useState({ pol: '', pod: '', container: '20GP' });
  const [result, setResult] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Mock Result
    setResult({
      carrier: 'Maersk',
      rate: 'USD 1,200',
      validity: '2025-04-30',
      transitTime: '15 days',
      note: 'Sample only',
    });
  };

  return (
    <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h1>Search Freight Rate</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 400 }}>
        <input name="pol" placeholder="POL (Port of Loading)" onChange={handleChange} required />
        <input name="pod" placeholder="POD (Port of Discharge)" onChange={handleChange} required />
        <select name="container" onChange={handleChange}>
          <option value="20GP">20GP</option>
          <option value="40GP">40GP</option>
          <option value="40HC">40HC</option>
        </select>
        <button type="submit">Check Rate</button>
      </form>

      {result && (
        <div style={{ marginTop: 24, padding: 16, background: '#f0f0f0' }}>
          <h3>Carrier: {result.carrier}</h3>
          <p>Rate: {result.rate}</p>
          <p>Validity: {result.validity}</p>
          <p>Transit Time: {result.transitTime}</p>
          <p>Note: {result.note}</p>
        </div>
      )}
    </div>
  );
}
