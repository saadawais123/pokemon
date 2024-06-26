import { QueryClient } from "react-query";
import axiosInstance from "./axios";

const pathSeparator = "/";

const queryClient = {
  defaultOptions: {
    queries: {
      queryFn: ({ queryKey }) =>
        axiosInstance
          .get(queryKey.join(pathSeparator))
          .then(({ data }) => data),
    },
  },
};

export default queryClient;
