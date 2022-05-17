import React from "react";
import PropTypes from 'prop-types';
import ProfessorItem from "./ProfessorItem";
import CourseList from "../CourseContainers/CourseList";

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function ProfessorList(props) {
    return (
        <ul style={styles.ul}>
            {props.professors.map((professor) => {
                return (
                    <div>
                        <ProfessorItem professor={professor}/>
                    </div>
                )
            })}
        </ul>
    )
}

ProfessorList.propTypes = {
    professors: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ProfessorList