import React, { lazy, Suspense, useCallback, useMemo } from "react";
import produce from "immer";
import { MainButton } from "../buttons/MainButton";
import { Loader } from "../Loader";
import "./Form.scss";
import { SelectedModulesContext } from "../../state/SelectedModulesContext";
import { renderCheckboxSchoolbooks } from "../../utils/formUtils";
import { useRequiredContext } from "../../hooks/useRequiredContext";
const CheckboxModule = lazy(() => import("../CheckboxModule/CheckboxModule"));

export function Form() {
  const { checkedModules, setCheckedModules } = useRequiredContext(
    SelectedModulesContext
  );

  const totalSchoolbooks = 2;
  const memoizedNamesSchoolbooks = useMemo(
    () => renderCheckboxSchoolbooks(totalSchoolbooks),
    [totalSchoolbooks]
  );

  const schoolbookCheckboxHandler = useCallback(
    (e) => {
      setCheckedModules((prevSchoolbook) =>
        produce(prevSchoolbook, (draft) => {
          if (!prevSchoolbook.has(e.target.id)) {
            draft.clear(); // when choosing other schoolbook, previous value clear, because we can choose only one schoolbook
            draft.set(e.target.id, []);
          }
        })
      );
    },
    [checkedModules]
  );

  return (
    <div className='form'>
      {memoizedNamesSchoolbooks.map((schoolbook) => (
        <div key={schoolbook}>
          <label className='form-schoolbook'>
            <input
              className='form-school-checkbox'
              type='radio'
              name='schoolbook'
              id={schoolbook}
              defaultChecked={checkedModules.has(schoolbook)}
              onClick={schoolbookCheckboxHandler}
            />{" "}
            {schoolbook}
          </label>
          {checkedModules.has(schoolbook) && (
            <Suspense fallback={<Loader />}>
              <CheckboxModule schoolbook={schoolbook} />
            </Suspense>
          )}
        </div>
      ))}
      {!!checkedModules.size && (
        <div className='form-btn--wrapper'>
          <MainButton buttonClass='form-btn' to='/wordlist'>
            Wordlist
          </MainButton>
          <MainButton buttonClass='form-btn' to='/test'>
            Test
          </MainButton>
        </div>
      )}
    </div>
  );
}
