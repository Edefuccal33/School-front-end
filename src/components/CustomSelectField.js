import {
    FormControl,
    FormErrorMessage,
    FormLabel,
  } from "@chakra-ui/form-control";
  import { Field, useField } from "formik";
  import { Select } from '@chakra-ui/react';

  const CustomSelectField = ({ label, options, ...props }) => {
    const [field, meta] = useField(props);
    
    return (
      <FormControl isInvalid={meta.error && meta.touched}>
        <FormLabel>{label}</FormLabel>
        <Field as={Select} {...field} {...props}>
            {options.map((option) => {
            return (
                <option key={option.value} value={option.value}>
                    {option.key}
                </option>
            )
            })}
        </Field>
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      </FormControl>
    );
  };
  
  export default CustomSelectField;