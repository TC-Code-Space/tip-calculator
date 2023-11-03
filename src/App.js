import {useState} from "react";

function App() {
  return (
    <div className = "App">
        <TipCalculator/>
    </div>
  );
}

function TipCalculator(){
    const [bill, setBill] = useState("");
    const [tipOne, setTipOne] = useState(0);
    const [tipTwo, setTipTwo] = useState(0);

    return(
        <div>
            <BillInput bill={bill} onSetBill={setBill}/>
            <SelectPercentage tip={tipOne} onSelect={setTipOne}>
                <h3>How did you like the service?</h3>
            </SelectPercentage>
            <SelectPercentage tip={tipTwo} onSelect={setTipTwo}>
                <h3>How did your friend like the service?</h3>
            </SelectPercentage>
            
            {bill > 0 && (
                <>
                    <Output bill={bill} tipOne={tipOne} tipTwo={tipTwo} />
                </>
            )}
        </div>

    );
}

function Output({bill, tipOne, tipTwo}){
    const totalTip = (tipOne + tipTwo)/100 * bill;
    const totalBill = bill + Number(totalTip.toFixed(2));
    
    return (
        <div>
            <h2>You pay ${totalBill} (${bill} + ${Number(totalTip.toFixed(2))} tip)</h2>
        </div>
    );
}

function BillInput({bill, onSetBill}){
    return(
        <div>
            <label><h3>How much was the bill?</h3> </label>
            <input type="text" placeholder="billValue" value={bill} onChange={(e) => onSetBill(Number(e.target.value))}/>
        </div>
    );
}

function SelectPercentage({tip, onSelect, children}){
    return(
        <div>
            <label>{children}</label>
            <select value={tip} onChange={(e) => onSelect(Number(e.target.value))}>
                <option value="0"> Dissatisfied (0%)</option>
                <option value="15"> Ok Service (15%)</option>
                <option value="20"> Good Service (20%)</option>
                <option value="25"> Great Service (25%)</option>
            </select>
        </div>
    );
}

export default App;
