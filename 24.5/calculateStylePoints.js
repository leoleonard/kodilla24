const calculateStylePoints = (styleNotes) => {
  
  if (!Array.isArray(styleNotes)) {
    return 'niepoprawny format danych!';
  } else if (styleNotes.length !== 5) {
    return 'niepoprawna ilość oddanych głosów!';
  } 
      
  const note = styleNotes.sort((a, b) => a - b);
  note.pop(); // usuniecie ostatniego elementu
  note.shift(); // usuniecie pierwszego elementu
  return note.reduce((sum, total) => sum + total, 0);
  };

  
  
  module.exports = calculateStylePoints;