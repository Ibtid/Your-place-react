import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input/Input";
import Button from "../../shared/components/FormElements/Button/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import Card from "../../shared/components/UIElements/Card/Card";
import { useForm } from "../../shared/hooks/form-hooks";
import "./PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrappers in the world!",
    imageUrl:
      "https://cropper.watch.aetnd.com/public-content-aetn.video.aetnd.com/video-thumbnails/AETN-History_VMS/21/202/tdih-may01-HD.jpg?w=1440",
    address: "20 W 34th St, New York, NY 10001, United States",

    latitude: 40.7484405,
    longitude: -73.9878584,

    creator: "u1",
  },
  {
    id: "p2",
    title: "River Thames",
    description:
      "The River Thames, known alternatively in parts as the Isis, is a river that flows through southern England including London. At 215 miles, it is the longest river entirely in England and the second-longest in the United Kingdom, after the River Severn. It flows through Oxford, Reading, Henley-on-Thames and Windsor.",
    imageUrl:
      "https://newseu.cgtn.com/news/7a517a4e3041544e34417a4d774d6a4e314d7a4e31457a6333566d54/img/5566c22cd5da41b2a7695a97d3cf61c0/5566c22cd5da41b2a7695a97d3cf61c0.jpg",
    address: "Cities: London, Oxford, Henley-on-Thames, Reading, Windsor",
    latitude: 51.585574,
    longitude: -0.616075,
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }

    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeSubmitHandler = (event) => {
    event.preventDefault();
  };

  if (!identifiedPlace) {
    return (
      <Card className="center">
        <h2> Could not find place!</h2>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        intialValid={formState.inputs.description.isValid}
      />

      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
