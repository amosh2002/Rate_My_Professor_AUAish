import React from "react";
import PropTypes from 'prop-types';
import CourseItem from "./CourseItem";

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function CourseList(props) {
    return (
        <ul style={styles.ul}>
            {props.courses.map((course) => {
                return <CourseItem course={course}/>
            })}
        </ul>
    )
}

CourseList.propTypes={
    courses: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CourseList