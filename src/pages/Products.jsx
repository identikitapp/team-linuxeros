import '../css/Products.css'
import { AiFillFilter } from 'react-icons/ai'

const Products = () => {
  return (
    <main className="main">
      <aside className="aside">
        <label htmlFor="category">
          Category
          <select name="category" id="" className="sort__select">
            <option value="asc" className="sort__option">
              Plantas
            </option>
            <option value="des" className="sort__option">
              Macetas
            </option>
            <option value="des" className="sort__option">
              Césped
            </option>
          </select>
        </label>

        <AiFillFilter size={'25px'} cursor={'pointer'} />
      </aside>
    </main>
  )
}

export { Products }
