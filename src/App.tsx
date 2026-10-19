import { CheckboxButton, CheckboxField } from "react-aria-components";
import { Checkbox } from "@base-ui/react/checkbox";
import { Field } from "@base-ui/react/field";

function App() {
  return (
    <div>
      <h2>RAC</h2>
      <CheckboxField>
        <CheckboxButton data-testid="rac-button" style={{ fontFamily: "monospace" }}>
          {({ isSelected }) => (
            <>
              <span aria-hidden>{isSelected ? "[x]" : "[ ]"} </span>
              <span>RAC Checkbox</span>
            </>
          )}
        </CheckboxButton>
      </CheckboxField>

      <h2>BaseUI</h2>
      <Field.Root>
        <Checkbox.Root
          render={(props, state) => (
            <div {...props} style={{ cursor: "default", fontFamily: "monospace" }}>
              <span aria-hidden>{state.checked ? "[x]" : "[ ]"} </span>
              <span>BaseUI Checkbox</span>
            </div>
          )}
        />
      </Field.Root>
    </div>
  );
}

export default App;
