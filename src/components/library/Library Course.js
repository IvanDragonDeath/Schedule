import React, { Component } from 'react';
import Icon from '../icon';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                { Icon('fas fa-check', 'library-course__icon') }
                {/* Arrow component */}
                {/* action component */}
              
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed blandit ipsum, eu rhoncus mauris. Etiam euismod, nisl rhoncus semper congue, tortor nulla lobortis massa, nec condimentum erat tellus non mauris.</p>
                </div>
            </div>
        )
    }
}
export default LibraryCourse