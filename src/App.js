
import { useState } from 'react';
import './App.css';
import CustomBtn from './Component/CustomBtn';

function App() {


  const [displayValue , setDisplayValue ] = useState('0')
  const [operator , setOperator ] = useState(null)
  const [firstOperand , setFirstOperand ] = useState(null)



  // Get Digit From Button
 const inputDigit = (digit) => {
  if(displayValue == '0'){
    setDisplayValue(String(digit))
  }else{
    setDisplayValue(displayValue + digit)
  }
  }

   const inputDecimal = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  // Handle Operator Input
   const handleOperator = (nextOperator) => {
    if(firstOperand == null){
      setFirstOperand(Number(displayValue))
    }else if (operator){
      const result = calculate(firstOperand , displayValue , operator);
      setDisplayValue(String(result));
      setFirstOperand(result)
      
    }

    setOperator(nextOperator)
    setDisplayValue('0')

  }
   const calculate = (operand1, operand2, operator) => {
    switch (operator) {
      case '+': return Number(operand1) + Number(operand2);
      case '*': return Number(operand1) * Number(operand2);
      case '/': return Number(operand1) / Number(operand2);
      case '-': return Number(operand1) - Number(operand2);
      default: return operand2;
    }
  };


  // Perform Calculation
  const handlePerformCalculation = () => {
    if(operator){
      const result = calculate(firstOperand, displayValue, operator);
      setDisplayValue(String(result));
      setFirstOperand(null)
      setOperator(null)
    }

  }


  // Reset Button
  const handleClear = () => {
    setDisplayValue('0')
    setOperator(null)
    setFirstOperand(null)
  }

  return (
    <div className="App flex justify-center bg-black
     h-[100vh]">
      <div className='flex flex-col gap-4 justify-center '>
      <h1 className='text-white text-center text-4xl mb-10 font-semibold'>Calculator App</h1>
        <div className='mb-4 flex justify-end bg-gray-800 py-2 h-[60px] rounded-lg px-1'>
          <input disabled className='text-white text-5xl text-right w-[340px] bg-transparent focus:bg-transparent focus:border-none pr-2' minLength="0" maxLength="10" value={displayValue} />
        </div>
        
        <div className='flex gap-5'>
        <CustomBtn text="1" action={() => inputDigit(1)} />
        <CustomBtn text="2" action={() => inputDigit(2)} />
        <CustomBtn text="3" action={() => inputDigit(3)} />
        <CustomBtn text="/" action={() => handleOperator("/")} />
        </div>

        <div className='flex gap-5'>
        <CustomBtn text="4" action={() => inputDigit(4)} />
        <CustomBtn text="5" action={() => inputDigit(5)} />
        <CustomBtn text="6" action={() => inputDigit(6)} />
        <CustomBtn text="*" action={() => handleOperator("*")} />

        </div>
        <div className='flex gap-5'>
        <CustomBtn text="7"  action={() => inputDigit(7)} />
        <CustomBtn text="8"  action={() => inputDigit(8)} />
        <CustomBtn text="9"  action={() => inputDigit(9)} />
        <CustomBtn text="-" action={() => handleOperator("-")} />
        </div>

        <div className='flex gap-5'>
        <CustomBtn text="0" action={() => inputDigit(0)}  />
        <CustomBtn text="." action={inputDecimal}  />
        <CustomBtn text="=" action={handlePerformCalculation} />
        <CustomBtn text="+" action={() => handleOperator("+")} />
        </div>
        <button text="Clear" onClick={handleClear} className='bg-orange-600 py-4 text-white text-3xl rounded-md '>Clear</button>
      </div>
     
    </div>
  );
}

export default App;
