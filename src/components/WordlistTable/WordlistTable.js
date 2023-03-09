import React, { useState } from "react";
import "./WordlistTable.scss";
import { WordlistTableRow } from "../WordlistTableRow";
import { IconButton } from "../buttons/IconButton";

export function WordlistTable() {
  const [wordsVisible, setWordsVisible] = useState(false);
  const [translateVisible, setTranslateVisible] = useState(false);

  return (
    <table className='table'>
      <tbody>
        <tr className='table-row'>
          <th className='table-cell'>№</th>
          <th className='table-cell'>
            Word
            <IconButton
              handler={() => setWordsVisible((prevValue) => !prevValue)}
              image={`../../img/${
                wordsVisible ? "invisibleEye.svg" : "visibleEye.svg"
              }`}
              descriptionImg={wordsVisible ? "show words" : "hide words"}
              disabledBtn={translateVisible}
            />
          </th>
          <th className='table-cell'>Transcription</th>
          <th className='table-cell'>
            Translate
            <IconButton
              handler={() => setTranslateVisible((prevValue) => !prevValue)}
              image={`../../img/${
                translateVisible ? "invisibleEye.svg" : "visibleEye.svg"
              }`}
              descriptionImg={
                translateVisible ? "show translate" : "hide translate"
              }
              disabledBtn={wordsVisible}
            />
          </th>
        </tr>
        <WordlistTableRow
          wordsVisible={wordsVisible}
          translateVisible={translateVisible}
        />
      </tbody>
    </table>
  );
}
