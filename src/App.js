import { useState } from "react";

export default function App() {

  const[height, setHeight] = useState("");
  const[weight, setWeight] = useState("");

  const[bmiResult, setBmiResult] = useState(null);

  const[status, setStatus] = useState("");

  function calculateBMI(){
    let bmi = Number(weight / (height/100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);

    setStatus(bmiStatus)
    
    //to clear after calculate
    setHeight("")
    setWeight("")
  }

  function getStatus(bmi) {
    if(bmi < 18.5) return "Underweight";
    else if(bmi >= 18.5 && bmi < 25) return "Normal";
    else if (bmi >= 25 && bmi < 30) return "overweight";
    else return "Obese";
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="font-extralight text-3xl text-center py-4">BMI Calculator</p>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="Height"
          >
            Height
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Height in cm"
            type="text"
            placeholder="Height in cm"
            value={height} 
            onChange = {e => setHeight(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="Weight"
          >
            Weight
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Weight in kg"
            type="text"
            placeholder="Weight in kg"
            value={weight}
            onChange = {e => setWeight(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center  ">
          <button
            className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={calculateBMI}
          >
            Calculate
          </button>
        </div>
        <div className="mt-4">
          <p>Your BMI is: {bmiResult}</p>
          <p>You are {status}</p>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2024 Harry Corp. All rights reserved.
      </p>
    </div>
  );
}
