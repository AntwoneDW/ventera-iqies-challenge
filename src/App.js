import React, {useState} from 'react';
import convert from 'convert-units';
import InputRow from './components/InputRow'
import './App.css';

function App() {

    const tempUnits = {
        'Kelvin': 'K',
        'Celsius': 'C',
        'Fahrenheit': 'F',
        'Rankine': 'R',
    };

    //liters, tablespoons, cubic-inches, cups, cubic-feet, and gallons
    const volumeUnits = {
        'Liters': 'l',
        'Tablespoons': 'tsp',
        'Cubic-inches': 'in3',
        'Cups': 'cup',
        'Cubic-feet': 'ft3',
        'Gallons': 'gal',
    };

    const [inputValue, setInputValue] = useState(0);
    const [inputUnits, setInputUnits] = useState(tempUnits[Object.keys(tempUnits)[0]]);
    const [targetUnits, setTargetUnits] = useState(tempUnits[Object.keys(tempUnits)[0]]);
    const [studentResponse, setStudentResponse] = useState(0);

    function getIsValid() {
        let tempErrMsg = "";
        const isApplesToApples =
            (Object.values(volumeUnits).includes(inputUnits) && Object.values(volumeUnits).includes(targetUnits))
            || (Object.values(tempUnits).includes(inputUnits) && Object.values(tempUnits).includes(targetUnits));
        tempErrMsg += (isApplesToApples ? "": "You cannot mix temperature and volume units. " );
        const isNumberFromTeacher = !isNaN(inputValue);
        tempErrMsg += (isNumberFromTeacher ? "": "Input is not a number. " );
        const isNumberFromStudent = !isNaN(studentResponse);
        tempErrMsg += (isNumberFromStudent ? "": "Student Input is not a number. " );
        const isValid = isApplesToApples && isNumberFromStudent && isNumberFromStudent;
        return isValid;
    }

    function getErrMsg() {
        let tempErrMsg = "";
        const isApplesToApples =
            (Object.values(volumeUnits).includes(inputUnits) && Object.values(volumeUnits).includes(targetUnits))
            || (Object.values(tempUnits).includes(inputUnits) && Object.values(tempUnits).includes(targetUnits));
        tempErrMsg += (isApplesToApples ? "": "You cannot mix temperature and volume units. " );
        const isNumberFromTeacher = !isNaN(inputValue);
        tempErrMsg += (isNumberFromTeacher ? "": "Teacher Input is not a number. " );
        const isNumberFromStudent = !isNaN(studentResponse);
        tempErrMsg += (isNumberFromStudent ? "": "Student Input is not a number. " );
        const isValid = isApplesToApples && isNumberFromStudent && isNumberFromStudent;
        return tempErrMsg;
    }

    const getRightAnswer = () => {
        let isValid = getIsValid();
        let result = "INVALID";
        if (isValid) {
            result = convert(inputValue).from(inputUnits).to(targetUnits);
            result = Math.round(10 * result) / 10;
        }
        return result;
    }

    const unitSelectOptions = () => {
        const options = [];
        Object.keys(tempUnits).forEach((niceName) => {
            const optionKey = tempUnits[niceName];
            options.push((<option key={optionKey} value={optionKey}>{niceName}</option>));
        });
        Object.keys(volumeUnits).forEach((niceName) => {
            const optionKey = volumeUnits[niceName];
            options.push((<option key={optionKey} value={optionKey}>{niceName}</option>));
        })
        ;


        return (
            options
        );
    };

    const getResultDisplay = () => {
        if(getIsValid())
        {
            const roundedStudentResponse = Math.round(10 * studentResponse);
            if (getRightAnswer() == roundedStudentResponse) {
                return "CORRECT";
            }
            return "INCORRECT";
        }
        else
        {
            return "INVALID";
        }
    }

    return (
        <div className="App">
                <InputRow defaultValue={inputValue} onChange={(evt) => {
                    setInputValue(evt.target.value)
                }} value={inputUnits} onChange1={(evt) => {
                    setInputUnits(evt.target.value)
                }} unitSelectOptions={unitSelectOptions()} value1={targetUnits} onChange2={(evt) => {
                    setTargetUnits(evt.target.value)
                }} defaultValue1={studentResponse} onChange3={(evt) => {
                    setStudentResponse(evt.target.value)
                }} rightAnswer={getRightAnswer()} resultDisplay={getResultDisplay()} errorMsg={getErrMsg()}/>
        </div>
    );
}

export default App;
