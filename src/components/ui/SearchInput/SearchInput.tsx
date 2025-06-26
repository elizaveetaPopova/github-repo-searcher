import styles from './styles.module.css'

interface SearchInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({value, onChange}: SearchInputProps) => {
  return (
    <input 
      placeholder="Search..." 
      value={value}
      onChange={onChange} 
      className={styles.input}
    />
  )
}

export default SearchInput;