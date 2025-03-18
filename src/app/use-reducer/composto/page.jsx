"use client";
import axios from "axios";
import { useCallback, useEffect, useReducer } from "react";

function useFetch({ url }) {

  const initialState = {
    error: undefined,
    data: undefined,
    isLoading: true,
  };

  const reducerFn = (state, action) => {
    switch (action.type) {
      case 'loading':
        return { ...initialState, isLoading: true };
      case 'fetched':
        return {
          ...initialState,
          isLoading: false,
          data: action.payload
        };
      case 'error':
        return {
          ...initialState,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFn, initialState);

  const handleFetch = useCallback(async () => {
    dispatch({ type: 'loading' });
    try {
      const response = await axios.get(url);
      dispatch({ type: 'fetched', payload: response?.data });
    } catch (error) {
      dispatch({ type: 'error', payload: "Algo deu errado" });
      console.error("Deu erro", error);
    }
  }, [url])

  useEffect(() => {
    handleFetch();
  }, [handleFetch])

  return {
    data: state.data,
    error: state.error,
    isLoading: state.isLoading,

  }
}

export default function UseReducerPage() {
  const URL = "https://randomuser.me/api/?results=20"
  const { data, error, isLoading } = useFetch({ url: URL });

  return (
    <>
      {data?.results?.map((value, index) => (
        <div key={index}>
          {value.name.first}
        </div>
      ))}
    </>
  );
}