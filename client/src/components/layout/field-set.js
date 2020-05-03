import React, { Fragment, useState } from "react";
import { Fieldset } from "primereact/fieldset";

const FieldSetComp = () => {
  return (
    <Fragment>
      <div>
        <div className="content-section implementation">
          <Fieldset legend="Godfather I">
            <p>
              The story begins as Don Vito Corleone, the head of a New York
              Mafia family, oversees his daughter's wedding. His beloved son
              Michael has just come home from the war, but does not intend to
              become part of his father's business. Through Michael's life the
              nature of the family business becomes clear. The business of the
              family is just like the head of the family, kind and benevolent to
              those who give respect, but given to ruthless violence whenever
              anything stands against the good of the family.
            </p>
          </Fieldset>

          <Fieldset legend="Godfather I" toggleable={true}>
            <p>
              The story begins as Don Vito Corleone, the head of a New York
              Mafia family, oversees his daughter's wedding. His beloved son
              Michael has just come home from the war, but does not intend to
              become part of his father's business. Through Michael's life the
              nature of the family business becomes clear. The business of the
              family is just like the head of the family, kind and benevolent to
              those who give respect, but given to ruthless violence whenever
              anything stands against the good of the family.
            </p>
          </Fieldset>
        </div>
      </div>
    </Fragment>
  );
};
export default FieldSetComp;
