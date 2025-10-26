"use client";

import { useState } from "react";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export function PasswordInput({ placeholder, value, onChange, h }) {
  const [show, setShow] = useState(false);

  return (
    <InputGroup size="md" h={h}> 
      <Input
        pr="3rem"
        type={show ? "text" : "password"}
        placeholder={placeholder || "Senha"}
        value={value}
        onChange={onChange}
        h={h}  
      />
      <InputRightElement h="100%">
        {show ? (
          <ViewOffIcon
            cursor="pointer"
            onClick={() => setShow(!show)}
            color="gray.500"
          />
        ) : (
          <ViewIcon
            cursor="pointer"
            onClick={() => setShow(!show)}
            color="gray.500"
          />
        )}
      </InputRightElement>
    </InputGroup>
  );
}
