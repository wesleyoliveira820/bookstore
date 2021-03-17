import { useEffect, useRef, FC } from "react";
import { useField } from "@unform/core";

import { Container } from "./styles";

interface Props {
  name: string;
}

type InputProps = JSX.IntrinsicElements["input"] & Props;

const InputText: FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => ref.current.value,
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container error={error}>
      <input
        className="input-text-form"
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <span className="error-validation-message">{error}</span>}
    </Container>
  );
};

export default InputText;
