import React, { useEffect, useState } from "react";
import NavigationBar from "./Navbar";
import CRUD from "./CRUD";
import { useFilter } from "./Context";

const App = () => {
  const [allCats, setAllCats] = useState([]); // Stores all cats
  const [cats, setCats] = useState([]);       // Stores filtered cats
  const { searchQuery } = useFilter();        // Get search text from global context

  useEffect(() => {
    const fetchCats = async () => {
      const data = await CRUD.getCats();
      setAllCats(data);
      setCats(data);
    };

    fetchCats();
  }, []);

  // Filter cats dynamically whenever searchQuery changes
  useEffect(() => {
    if (!searchQuery.trim()) {
      setCats(allCats); // Show all cats if input is empty (or undefined? to test)
      return;
    }

    const filteredCats = allCats.filter(cat =>
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.age.toString().includes(searchQuery) ||
      cat.gender.toLowerCase() === searchQuery.toLowerCase() || //orig: cat.gender.includes(searchQuery)
      cat.color.toLowerCase().includes(searchQuery.toLowerCase()) //orig: cat.color.includes(searchQuery)
    );

    setCats(filteredCats);
  }, [searchQuery, allCats]); // Useffect, so runs again when searchQuery or allCats changes

  return (
    <>
      <NavigationBar />
      <div className="container mt-4">
        <h2>Available Cats for Adoption</h2>
        <table className="table table-striped table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            {cats.map(cat => (
              <tr key={cat.id}>
                <td>{cat.name}</td>
                <td>{cat.age}</td>
                <td>{cat.gender}</td>
                <td>{cat.color}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
