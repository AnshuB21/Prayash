import { Children, JSX } from "react";
import { PropsWithChildren } from "react";

type ComponentProps = PropsWithChildren<{
  name: string;
  id: number;
  //children?: React.ReactNode; //represents all type of things react can render between the component tags
}>;

function Component(
  props: ComponentProps
): JSX.Element | null | number | string {
  return (
    <div>
      <h2>name {props.name}</h2>
      <h2>{props.id}</h2>
      {props.children}
    </div>
  );
}
export default Component;
