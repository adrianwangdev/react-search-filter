import styled from 'styled-components'

const SearchInput = styled.input`
  width: 40%;
  padding: 0.75rem 1.25rem;
  border-radius: 1.5rem;
  border: 0;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  color: rgb(43, 83, 102);
  background: rgba(173, 215, 235, 0.3);

  &::placeholder {
    color: rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
  }
`

export default SearchInput
