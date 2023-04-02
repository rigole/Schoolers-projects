import React, {useCallback} from "react";

export type Props = {
        title: string,
        index: number;
        setSelectedTab: (index: number) => void;
        isActive?: boolean;
    };

const TabTitle = (props: Props): JSX.Element => {
    const { title, setSelectedTab, index, isActive } = props;

    const handleOnClick = useCallback(() => {
        setSelectedTab(index);
    }, [setSelectedTab, index]);

    return (
        <li className={`${isActive ? 'active' : ''}`}>
            <button onClick={handleOnClick}>{title}</button>
        </li>
    );
}

export default TabTitle;

