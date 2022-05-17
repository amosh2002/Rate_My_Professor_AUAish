import React from "react";
import PropTypes from 'prop-types';
import CourseList from "../CourseContainers/CourseList";

const styles = {
    parentLi: {
        position: "relative",
        height: 110,
        width: 400,
        margin: 2,
        marginTop: 5,
        border: '0.5px solid rgba(0, 0, 0, 0.5)',
    },
    img: {
        padding: 5,
        height: 100,
        width: '25%',
        display: 'block',
        float: 'left'
    },
    texts: {
        float: "left",
        display: 'block',
    },
    name: {
        paddingTop: 5,
        fontWeight: "bold"
    },
    rating: {
        position: "absolute",
        bottom: 10,
        left: 115,
        float: "bottom"
    },
    above8: {
        color: 'green'
    },
    above5: {
        color: 'orange'
    },
    above0: {
        color: 'red'
    }
}

function ProfessorItem({professor}) {
    return (
        <div>
            <li style={styles.parentLi}>
                <div>
                    <img src={professor.img_src} alt="Image Not Found" style={styles.img}/>
                </div>
                <div id={styles.texts}>
                    <div style={styles.name}>
                        {professor.name}
                    </div>
                    <CourseList courses={professor.courses}/>
                    <div style={styles.rating}>
                        {defineColor(professor.rating)}
                    </div>
                </div>

            </li>
        </div>
    )
}

function defineColor(rating) {
    if (rating >= 8) {
        return (
            <span style={styles.above8}>{rating}</span>
        )
    } else if (rating >= 5) {
        return (
            <span style={styles.above5}>{rating}</span>
        )
    } else if (rating >= 0) {
        return (
            <span style={styles.above0}>{rating}</span>
        )
    }
}

ProfessorItem.propTypes = {
    professor: PropTypes.object.isRequired,
}
export default ProfessorItem