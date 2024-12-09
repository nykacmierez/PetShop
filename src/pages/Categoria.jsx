import ListCategories from "../components/ListCategories";
import ListPosts from "../components/ListPosts";
import Subcategoria from "./Subcategoria";

import { useState, useEffect } from "react";
import { useParams, Routes, Route, Link, useResolvedPath } from "react-router-dom";
import { buscar } from "../api/api";

import '../assets/css/blog.css';

export const Categoria = () => {

    const [subcategorias, setSubcategorias] = useState([]);
    const { id } = useParams();
    const url = useResolvedPath("").pathname;
    console.log(url)

    useEffect(() => {
      buscar(`/categorias?id=${id}`, (response) => {
        setSubcategorias(response[0].subcategorias)
      })
    }, [id])

  return (
    
    <>
        <div className="container">
            <h2 className="title-page">Pet noticias</h2>
        </div>

        <ListCategories />
        <ul className="category-list container flex">
          {
            subcategorias.map(subcategoria => (
              <li className={`category-list__category category-list__category--${id}`} key={subcategoria}>
                <Link to={`${url}/${subcategoria}`}>
                  {subcategoria}
                </Link>
              </li>
            ))
          }
        </ul>
        <Routes>
          
          <Route path="/" element={ <ListPosts url={`/posts?categoria=${id}`} />} />
          <Route path="/:subcategoria" element={<Subcategoria />} />
          
        </Routes>
    </>
  )
}

export default Categoria;