import React, { useState } from "react";

const content = [
    {
        tab: "Section 1",
        content: `I'm the contentof the section 1`
    },

    {
        tab: "Section 2",
        content: `I'm the contentof the section 2`
    }
];

const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);

    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }

    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    };
};

export default function App() {
    const { currentItem, changeItem } = useTabs(0, content);
    return (
        <div className="App">
            {content.map((item, idx) => (
                <button onClick={() => changeItem(idx)} key={idx}>
                    {item.tab}
                </button>
            ))}
            <div> {currentItem.content}</div>
        </div>
    );
}
