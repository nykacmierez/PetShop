import { useParams } from "react-router-dom"
import ListPosts from "../components/ListPosts"

export const Subcategoria = () => {

    const { subcategoria } = useParams();
    
  return (

    <ListPosts url={`/posts?subcategoria=${subcategoria}`} />

  )
}

export default Subcategoria;