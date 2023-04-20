import * as S from './styles'

export type SearchProps = {
  placeholder?: string
  onChange?: (value: string) => void
} & React.InputHTMLAttributes<HTMLInputElement>

const Search = ({ placeholder, onChange }: SearchProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    onChange && onChange(value)
  }

  return (
    <>
      <S.Wrapper onChange={handleChange} placeholder={placeholder} />
    </>
  )
}

export default Search
