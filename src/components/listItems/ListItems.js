import React from 'react';
import "./ListItem.css"
const ListItems = (props) => {
    return (
        <div>
            <ul class="list-group">
                {(props.list || []).map((item) => {
                    return (
                        <li class="list-group-item">
                            {item}
                        </li>
                    );
                })}

            </ul>
        </div>
    );
}

export default ListItems;
