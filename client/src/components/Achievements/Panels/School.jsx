import React from "react";
import M from "materialize-css";

import AchievementCard from "./achievementCard";
import achievementsList from "../../../assets/achievements/school/achievements";
class School extends React.Component {
    componentDidMount() {
        var elems = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(elems);
    }
    render() {
        return (
            <div>
                {achievementsList.map(prop => <AchievementCard title={prop.title} image={prop.image} content={prop.content} />)}
            </div>
        );
    }
};

export default School;
