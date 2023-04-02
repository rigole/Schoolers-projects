import React, { ReactElement } from "react";

type Props = {
    title: string,
    children: ReactElement | ReactElement[];
}

const TabPanelComponent = ({ children }: Props): JSX.Element => <div>{children}</div>;

export default TabPanelComponent;