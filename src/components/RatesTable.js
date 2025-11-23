import { useEffect, useState } from "react";
import "./RatesTable.css";

const RatesTable = () => {
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/services-rates/get-rates`
        );

        const data = await response.json();
        setRates(data.rates);
      } catch (error) {
        console.error("Error fetching rates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  if (loading) return <p className="loading">Loading...</p>;
  if (!rates || rates.length === 0)
    return <p className="no-data">No rates available</p>;

  // Dynamic columns based on keys
  const columns = Object.keys(rates[0]).filter(
    (key) => key !== "_id" && key !== "__v"
  );

  return (
    <div className="rates-container">
      <h2 className="rates-title">Service Rates</h2>

      <div className="table-wrapper">
        <table className="rates-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rates.map((row) => (
              <tr key={row._id}>
                {columns.map((col) => (
                  <td key={col}>{row[col]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RatesTable;
