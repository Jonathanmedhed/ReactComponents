import React, { Fragment, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

const DialogPrime = () => {
  const [displayBasic, setDisplayBasic] = useState(false);
  const [displayBasic2, setDisplayBasic2] = useState(false);
  const [displayBlockScroll, setDisplayBlockScroll] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  const [displayMaximizable, setDisplayMaximizable] = useState(false);
  const [displayPosition, setDisplayPosition] = useState(false);
  const [position, setPosition] = useState("center");

  let onClick = (name, position) => {
    let state = {
      [`${name}`]: true,
    };

    if (position) {
      setPosition(position);
      setDisplayPosition(true);
    }

    switch (name) {
      case "displayBasic":
        setDisplayBasic(true);
        break;
      case "displayBasic2":
        setDisplayBasic2(true);
        break;
      case "displayBlockScroll":
        setDisplayBlockScroll(true);
        break;
      case "displayMaximizable":
        setDisplayMaximizable(true);
        break;
      default:
        return;
    }
  };

  let onHide = (name) => {
    switch (name) {
      case "displayBasic":
        setDisplayBasic(false);
        break;
      case "displayBasic2":
        setDisplayBasic2(false);
        break;
      case "displayBlockScroll":
        setDisplayBlockScroll(false);
        break;
      case "displayMaximizable":
        setDisplayMaximizable(false);
        break;
      case "displayPosition":
        setDisplayPosition(false);
        break;
      default:
        return;
    }
  };

  let renderFooter = (name) => {
    return (
      <div>
        <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} />
        <Button
          label="No"
          icon="pi pi-times"
          onClick={() => onHide(name)}
          className="p-button-secondary"
        />
      </div>
    );
  };

  return (
    <Fragment>
      <div>
        <div className="content-section implementation dialog-demo">
          <h3>Basic</h3>
          <Button
            label="Show"
            icon="pi pi-external-link"
            onClick={() => onClick("displayBasic")}
          />
          <Dialog
            header="Godfather I"
            visible={displayBasic}
            style={{ width: "50vw" }}
            onHide={() => onHide("displayBasic")}
            footer={renderFooter("displayBasic")}
          >
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
          </Dialog>

          <Button
            label="Long Content"
            icon="pi pi-external-link"
            onClick={() => onClick("displayBasic2")}
          />
          <Dialog
            header="Godfather Casting"
            visible={displayBasic2}
            style={{ width: "50vw" }}
            onHide={() => onHide("displayBasic2")}
            blockScroll
            footer={renderFooter("displayBasic2")}
          >
            Puzo was first to show interest in having Marlon Brando portray Don
            Vito Corleone by sending a letter to Brando in which he stated
            Brando was the "only actor who can play the Godfather." Despite
            Puzo's wishes, the executives at Paramount were against having
            Brando, partly due to the poor performance of his recent films and
            also his short temper. Coppola favored Brando or Laurence Olivier
            for the role, but Olivier's agent refused the role claiming Olivier
            was sick; however, Olivier went on to star in Sleuth later that
            year. The studio mainly pushed for Ernest Borgnine to receive the
            part. Other considerations were George C. Scott, Richard Conte,
            Anthony Quinn, and Orson Welles.
            <br />
            <br />
            After months of debate between Coppola and Paramount over Brando,
            the two finalists for the role were Borgnine and Brando, the latter
            of whom Paramount president Stanley Jaffe required to perform a
            screen test. Coppola did not want to offend Brando and stated that
            he needed to test equipment in order to set up the screen test at
            Brando's California residence. For make-up, Brando stuck cotton
            balls in his cheeks, put shoe polish in his hair to darken it, and
            rolled his collar. Coppola placed Brando's audition tape in the
            middle of the videos of the audition tapes as the Paramount
            executives watched them. The executives were impressed with Brando's
            efforts and allowed Coppola to cast Brando for the role if Brando
            accepted a lower salary and put up a bond to ensure he would not
            cause any delays in production. Brando earned $1.6 million from a
            net participation deal.
            <br />
            <br />
            From the start of production, Coppola wanted Robert Duvall to play
            the part of Tom Hagen. After screen testing several other actors,
            Coppola eventually got his wish and Duvall was awarded the part of
            Tom Hagen. Al Martino, a then famed singer in nightclubs, was
            notified of the character Johnny Fontane by a friend who read the
            eponymous novel and felt Martino represented the character of Johnny
            Fontane. Martino then contacted producer Albert S. Ruddy, who gave
            him the part. However, Martino was stripped of the part after
            Coppola became director and then awarded the role to singer Vic
            Damone. According to Martino, after being stripped of the role, he
            went to Russell Bufalino, his godfather and a crime boss, who then
            orchestrated the publication of various news articles that claimed
            Coppola was unaware of Ruddy giving Martino the part. Damone
            eventually dropped the role because he did not want to provoke the
            mob, in addition to being paid too little. Ultimately, the part of
            Johnny Fontane was given to Martino.
            <br />
            <br />
            Robert De Niro originally was given the part of Paulie Gatto. A spot
            in The Gang That Couldn't Shoot Straight opened up after Al Pacino
            quit the project in favor of The Godfather, which led De Niro to
            audition for the role and leave The Godfather after receiving the
            part. After De Niro quit, Johnny Martino was given the role of
            Gatto. Coppola cast Diane Keaton for the role of Kay Adams due to
            her reputation for being eccentric. John Cazale was given the part
            of Fredo Corleone after Coppola saw him perform in an Off Broadway
            production. Gianni Russo was given the role of Carlo Rizzi after he
            was asked to perform a screen test in which he acted out the fight
            between Rizzi and Connie.
            <br />
            <br />
            Nearing the start of filming on March 29, Michael Corleone had yet
            to be cast. Paramount executives wanted a popular actor, either
            Warren Beatty or Robert Redford. Producer Robert Evans wanted Ryan
            O'Neal to receive the role in part due to his recent success in Love
            Story. Pacino was Coppola's favorite for the role as he could
            picture him roaming the Sicilian countryside, and wanted an unknown
            actor who looked like an Italian-American. However, Paramount
            executives found Pacino to be too short to play Michael. Dustin
            Hoffman, Martin Sheen, and James Caan also auditioned. Caan was well
            received by the Paramount executives and was given the part of
            Michael initially, while the role of Sonny Corleone was awarded to
            Carmine Caridi. Coppola still pushed for Pacino to play Michael
            after the fact and Evans eventually conceded, allowing Pacino to
            have the role of Michael as long as Caan played Sonny. Evans
            preferred Caan over Caridi because Caan was seven inches shorter
            than Caridi, which was much closer to Pacino's height. Despite
            agreeing to play Michael Corleone, Pacino was contracted to star in
            MGM's The Gang That Couldn't Shoot Straight, but the two studios
            agreed on a settlement and Pacino was signed by Paramount three
            weeks before shooting began.
            <br />
            <br />
            Coppola gave several roles in the film to family members. He gave
            his sister, Talia Shire, the role of Connie Corleone. His daughter
            Sofia played Michael Francis Rizzi, Connie's and Carlo's newborn
            son. Carmine Coppola, his father, appeared in the film as an extra
            playing a piano during a scene. Coppola's wife, mother, and two sons
            all appeared as extras in the picture. Several smaller roles, like
            Luca Brasi, were cast after the filming had started.
            <br />
            <br />
          </Dialog>

          <h3>BlockScroll</h3>
          <Button
            label="Show"
            icon="pi pi-external-link"
            onClick={() => onClick("displayBlockScroll")}
          />
          <Dialog
            header="Godfather I"
            visible={displayBlockScroll}
            style={{ width: "50vw" }}
            onHide={() => onHide("displayBlockScroll")}
            blockScroll
            footer={renderFooter("displayBlockScroll")}
          >
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
          </Dialog>

          <h3>Without Modal</h3>
          <Button
            label="Show"
            icon="pi pi-external-link"
            onClick={() => onClick("displayModal")}
          />
          <Dialog
            header="Godfather I"
            visible={displayModal}
            style={{ width: "50vw" }}
            onHide={() => onHide("displayModal")}
            modal={false}
            footer={renderFooter("displayModal")}
          >
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
          </Dialog>

          <h3>Maximizable</h3>
          <Button
            label="Show"
            icon="pi pi-external-link"
            onClick={() => onClick("displayMaximizable")}
          />
          <Dialog
            header="Godfather I"
            visible={displayMaximizable}
            style={{ width: "50vw" }}
            onHide={() => onHide("displayMaximizable")}
            maximizable
            blockScroll
            footer={renderFooter("displayMaximizable")}
          >
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
          </Dialog>

          <h3>Position</h3>
          <div className="p-grid p-dir-col">
            <div className="p-col">
              <Button
                label="Left"
                icon="pi pi-arrow-right"
                onClick={() => onClick("displayPosition", "left")}
                className="p-button-warning"
              />
              <Button
                label="Right"
                icon="pi pi-arrow-left"
                onClick={() => onClick("displayPosition", "right")}
                className="p-button-warning"
              />
            </div>
            <div className="p-col">
              <Button
                label="Top"
                icon="pi pi-arrow-down"
                onClick={() => onClick("displayPosition", "top")}
                className="p-button-warning"
              />
              <Button
                label="TopLeft"
                icon="pi pi-arrow-down"
                onClick={() => onClick("displayPosition", "topleft")}
                className="p-button-warning"
              />
              <Button
                label="TopRight"
                icon="pi pi-arrow-down"
                onClick={() => onClick("displayPosition", "topright")}
                className="p-button-warning"
              />
            </div>
            <div className="p-col">
              <Button
                label="Bottom"
                icon="pi pi-arrow-up"
                onClick={() => onClick("displayPosition", "bottom")}
                className="p-button-warning"
              />
              <Button
                label="BottomLeft"
                icon="pi pi-arrow-up"
                onClick={() => onClick("displayPosition", "bottomleft")}
                className="p-button-warning"
              />
              <Button
                label="BottomRight"
                icon="pi pi-arrow-up"
                onClick={() => onClick("displayPosition", "bottomright")}
                className="p-button-warning"
              />
            </div>
          </div>

          <Dialog
            header="Godfather I"
            visible={displayPosition}
            style={{ width: "50vw" }}
            onHide={() => onHide("displayPosition")}
            position={position}
            blockScroll
            footer={renderFooter("displayPosition")}
          >
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
          </Dialog>
        </div>
      </div>
    </Fragment>
  );
};
export default DialogPrime;
