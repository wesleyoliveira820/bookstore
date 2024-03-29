import { useEffect, useRef, FC } from "react";
import { useField } from "@unform/core";

import InputTextLayout from "@layouts/InputText";

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
    <InputTextLayout error={error}>
      <input
        className="input-text-form"
        id={fieldName}
        ref={inputRef}
        name={name}
        defaultValue={defaultValue}
        {...rest}
      />
    </InputTextLayout>
  );
};

export default InputText;
