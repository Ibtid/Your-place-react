import React from "react";

import Input from "../../shared/components/FormElements/Input/Input";
import Button from "../../shared/components/FormElements/Button/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

import { useForm } from "../../shared/hooks/form-hooks";

import "./PlaceForm.css";

const NewPlaces = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isvalid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const placeSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="not valid"
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="At least 5 characters"
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Enter the address"
        onInput={inputHandler}
      />
      <Input
        id="latitude"
        element="input"
        label="Latitude"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Required"
        onInput={inputHandler}
      />
      <Input
        id="longitude"
        element="input"
        label="Longitude"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Required"
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlaces;
