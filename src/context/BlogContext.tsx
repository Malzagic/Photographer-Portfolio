import React, { createContext, useReducer, useEffect, ReactNode } from "react";
import axios from "axios";
import { blogReducer, initialState } from "../reducers/blogReducer";
import { FETCHING_ACTIONS } from "../actions";
import { toast } from "react-toastify";

const baseURL = "http://localhost:1337/";

interface PROPS {
  data: any[];
  loading: boolean;
  error: string | null;
}

const BlogContext = createContext<PROPS>({
  data: [],
  loading: false,
  error: null,
});

interface BlogProviderProps {
  children: ReactNode;
}

export function BlogProvider({ children }: BlogProviderProps) {
  const [state, dispatch] = useReducer(blogReducer, initialState);
  const { data, loading, error } = state;

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: FETCHING_ACTIONS.PROGRESS });
      try {
        const response = await axios.get(
          `${baseURL}/api/blogs?populate=image`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_BR_TOKEN}`,
            },
          }
        );
        if (response.status === 200) {
          dispatch({
            type: FETCHING_ACTIONS.SUCCESS,
            payload: response.data.data,
          });
        }
      } catch (err) {
        dispatch({
          type: FETCHING_ACTIONS.ERROR,
          error: err instanceof Error ? err.message : "Unknown error occurred",
        });
        toast.error("There was a problem with loading blog posts.");
      }
    };
    fetchData();
  }, []);

  return (
    <BlogContext.Provider value={{ data, loading, error }}>
      {children}
    </BlogContext.Provider>
  );
}

export default BlogContext;
