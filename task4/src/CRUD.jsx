const API_URL = `http://127.0.0.1:5500/cats`; // Did not work with ${location.origin}/api/cats, used as temporary


const CRUD = {
  getCats: async () => {
    try {
      const response = await fetch(API_URL, { headers: { Accept: "application/json" } });

      console.log("Full Response:", response);

      if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

      const data = await response.json();
      console.log("Parsed JSON data:", data);
      return data;
    } catch (error) {
      console.error("Error fetching cats:", error);
      return [];
    }
  },

  deleteCat: async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error(`Failed to delete cat: ${response.status}`);
    } catch (error) {
      console.error("Error deleting cat:", error);
    }
  },
};

export default CRUD;
