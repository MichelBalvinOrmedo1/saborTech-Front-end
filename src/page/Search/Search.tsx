import { useDispatch } from "react-redux";
import { RecipeList } from "../../components/RecipeList";
import { useEffect } from "react";
import { AppDispatch, setRecipes } from "../../redux";

import publicConfig from "../../config/public.config";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const api = publicConfig.api.v1;

const getCeripes = async () => {
  try {
    const res = await axios.get(`${api}/recipe`);
    return res.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};

export const Search = () => {
  const dispatch = useDispatch<AppDispatch>();

  const query = useQuery({
    queryKey: ["recipes"],
    queryFn: getCeripes,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (query.data) {
      dispatch(setRecipes(query.data));
    }
  }, [query.data, dispatch]);

  return (
    <>
      <RecipeList />
    </>
  );
};
