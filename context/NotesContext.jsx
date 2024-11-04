import { useState, createContext } from "react";

const data = [
  {
    id: 1,
    title: "Note 1",
    desc: "Description for Note 1",
  },
  {
    id: 2,
    title: "Note 2",
    desc: "Description for Note 2 dhjfjhsdfjhsdjhfvcjsdcnjsdhjcfvsdjcsdhjkvcfsdhjkfsdjkhfhj",
  },
  {
    id: 3,
    title: "Note 3",
    desc: "Description for Note 3",
  },
  {
    id: 4,
    title: "Note 4",
    desc: "Description for Note 4",
  },
];

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(data);

  const handleCreateNote = ({ title, desc }) => {
    setNotes([...notes, { title, desc }]);
  };

  const value = {
    handleCreateNote,
    notes,
  };
  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};
