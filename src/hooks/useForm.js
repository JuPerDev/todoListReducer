import { useState } from "react";

export const useForm = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };
  return { inputValue, handleInputValue, setInputValue };
};
