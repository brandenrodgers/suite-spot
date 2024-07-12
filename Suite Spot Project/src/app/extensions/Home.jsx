import React from "react";
import { Text } from "@hubspot/ui-extensions";
import { hubspot } from "@hubspot/ui-extensions";

hubspot.extend(() => <Extension />);

const Extension = () => {
  return (
    <>
      <Text>Welcome to the Suite Spot card!</Text>
    </>
  );
};
