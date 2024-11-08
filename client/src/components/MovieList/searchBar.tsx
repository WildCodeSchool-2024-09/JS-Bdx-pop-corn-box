type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

export default function SearchBar({
  searchTerm,
  setSearchTerm,
}: SearchBarProps) {
  const handleSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  return (
    <>
      <header>
        <h1>Les Films</h1>
        <label htmlFor="searchBar">Recherche</label>
        <input
          type="search"
          name="searchBar"
          className="rechercher"
          placeholder="Que voulez vous regardez"
          onChange={handleSearchTerm}
        />
      </header>
    </>
  );
}
