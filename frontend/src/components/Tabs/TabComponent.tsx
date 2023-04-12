import React, { ReactElement, useState } from "react";

import TabTitle, { Props as TabTitlePros } from "./TabsListComponent";

type Props = {
    children: ReactElement<TabTitlePros>[];
    preseSelectedTabIndex?: number;
};

const TabComponent = (props: Props): JSX.Element => {
    const { children, preseSelectedTabIndex } = props;
    const [selectedTabIndex, setSelectedTabIndex] = useState<number>(preseSelectedTabIndex || 0);

    return (
        <div >
            <ul className='tab '>
                {children.map((item, index) =>(
                    <TabTitle
                        key={item.props.title}
                        title={item.props.title}
                        index={index}
                        isActive={index === selectedTabIndex}
                        setSelectedTab={setSelectedTabIndex}
                    />
                ))}

            </ul>

            {children[selectedTabIndex]}
        </div>
    )


}

export default TabComponent

