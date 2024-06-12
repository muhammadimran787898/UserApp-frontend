import { useState, useEffect, useCallback } from "react";
import axios, { AxiosRequestConfig } from "axios";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface ApiParams {
  url: string;
  method: HttpMethod;
  data?: any; // Data for POST and PUT requests
  headers?: any;
}

interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
  callApi: () => void;
}

const useApi = <T,>(params: ApiParams): ApiResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const callApi = useCallback(async () => {
    setLoading(true);
    setError(null);

    const { url, method, data: requestData, headers } = params;

    try {
      const config: AxiosRequestConfig = {
        url,
        method,
        headers,
        data: requestData,
      };

      const response = await axios(config);
      setData(response.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err?.response?.data?.message || "An error occurred");
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  }, [params]);

  useEffect(() => {
    callApi();
  }, [params.url, params.method, params.data, params.headers, callApi]);

  return { data, error, loading, callApi };
};

export default useApi;
