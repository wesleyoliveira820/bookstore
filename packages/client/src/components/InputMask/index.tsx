import { useEffect, useRef, FC, ChangeEvent } from "react";
import { useField } from "@unform/core";
import InputMask, { ReactInputMask } from "react-input-mask";

import InputTextLayout from "@layouts/InputText";

interface InputProps {
  name: string;
  mask: string;
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputText: FC<InputProps> = ({ name, mask, ...rest }) => {
  const inputRef = useRef<ReactInputMask>(null);

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
      <InputMask
        mask={mask}
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
