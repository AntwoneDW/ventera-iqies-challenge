import React from 'react';
import * as PropTypes from "prop-types";

const InputRow = (props) => {

    const divStyle = {
        color: 'red'
    };

    return (
        <table>
            <tbody>
            <tr>
                <td>
                    <label>
                        Teacher Input:
                        <br/>
                        <input aria-label="teachInput" type="text" defaultValue={props.defaultValue} onChange={props.onChange
                        }/>
                    </label>
                    <br/><br/>
                </td>

                <td>
                    <label>
                        Input Units:
                        <br/>
                        <select value={props.value} onChange={props.onChange1
                        }>
                            {props.unitSelectOptions}
                        </select>
                    </label>
                    <br/><br/>
                </td>

                <td>
                    <label>
                        Target Units:
                        <br/>
                        <select value={props.value1} onChange={props.onChange2
                        }>
                            {props.unitSelectOptions}
                        </select>
                    </label>
                    <br/><br/>
                </td>

                <td>
                    <label>
                        Student Response:
                        <br/>
                        <input aria-label='student-input' type="text" defaultValue={props.defaultValue1} onChange={props.onChange3
                        }/>
                        <br/>
                        {props.rightAnswer}
                    </label>
                </td>
                <td>
                    <div aria-label="result-display">{props.resultDisplay}</div>
                </td>
            </tr>
            <tr>
                <td colSpan={5}>
                    <div style={divStyle}>
                    {props.errorMsg}
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    );
}

export default InputRow;

InputRow.propTypes = {
    defaultValue: PropTypes.number,
    onChange: PropTypes.func,
    value: PropTypes.any,
    onChange1: PropTypes.func,
    unitSelectOptions: PropTypes.any,
    value1: PropTypes.any,
    onChange2: PropTypes.func,
    defaultValue1: PropTypes.number,
    onChange3: PropTypes.func,
    rightAnswer: PropTypes.any,
    resultDisplay: PropTypes.string,
    errorMsg: PropTypes.string
};


