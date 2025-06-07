import StackWithText from "../../TechStackWithText/StackWithText";
import type { TComponent } from "../consts/skills";
import { expand } from "../consts/skills";
import ExpandWrapper from "../Wrapper/ExpandWrapper";
function Expand({ component }: { component: TComponent }) {
  const selectedComponent = expand[component];
  const ComponentToRender = selectedComponent.component;
  const childComponent = selectedComponent.detailChildren();

  return (
    <ExpandWrapper
      key={component}
      className={component === expand[component].name ? "fadeIn" : "fadeOut"}
    >
      <StackWithText key={component} list={selectedComponent.list}>
        {childComponent}
      </StackWithText>
      <ComponentToRender />
    </ExpandWrapper>
  );
}
export default Expand;
