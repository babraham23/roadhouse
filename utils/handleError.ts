import axios from "axios";

type ErrorRes = {
  status: number;
  detail: string;
  title: string;
};


export const handleError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.response) return alert((error.response.data as ErrorRes).detail);

    return alert(error.message);
  }
};
