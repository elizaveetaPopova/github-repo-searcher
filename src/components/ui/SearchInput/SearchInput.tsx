import styles from './styles.module.css';

interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputError: string | null;
}

const SearchInput = ({ value, onChange, inputError }: SearchInputProps) => {
  return (
    <>
      <input
        placeholder="Search"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
      {inputError && value.trim() !== '' && (
        <p className={styles.error}>{inputError}</p>
      )}
    </>
  );
};

export default SearchInput;
