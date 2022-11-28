import React from "react";
import { useSelector, useDispatch } from "react-redux";

export function NewsContainer() {
    //get news data from state
    const newsData = useSelector(state => state.news);
    const toRender = [];
    return (
        <div>
            {toRender}
        </div>
    )
}