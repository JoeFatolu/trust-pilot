import { client } from "context/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFindCompany = () => {
  const findCompany = async (domain) => {
    const response = await client("companies/find", {
      method: "POST",
      body: JSON.stringify(domain),
    });
    return response;
  };

  const mutate = useMutation(findCompany, {
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return mutate;
};

const useCompanies = (title) => {
  const formData = new FormData();
  formData.append("category", title);
  // return
  return useQuery({
    queryKey: ["companies", title],
    queryFn: () =>
      axios
        .post(`http://localhost:4000/companies/fetchByCategory`, formData, {})
        .then((i) => i.data.companies),
  });
};

export { useFindCompany, useCompanies };
