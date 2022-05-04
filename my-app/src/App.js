import React, { useRef } from 'react';

export default function App(props) {
    const userInput1 = useRef(null);
    const userInput2 = useRef(null);
    const userInput3 = useRef(null);

    const [checked, setChecked] = React.useState(false);
    const [checked1, setChecked1] = React.useState(false);
    
    const handleChange = () => {
      setChecked(!checked);
    };
    const handleChange1 = () => {
      setChecked1(!checked1);
    };


    function part1() {

        //var concatenatedString = "";

        var input1 = userInput1.current.value;
        var input2 = userInput2.current.value;
        var input3 = userInput3.current.value;

        if(input1 === null || input2 === null || input3 === null){
          alert('null input!');
          return false;
        }

        var validElements = document.getElementById('validMessage');
        validElements.style.display = 'block';
        
        var ABC = document.getElementById('ABC');
        ABC.style.display = 'block';
        var ACB = document.getElementById('ACB');
        ACB.style.display = 'block';
        var BAC = document.getElementById('BAC');
        BAC.style.display = 'block';
        var BCA = document.getElementById('BCA');
        BCA.style.display = 'block';
        var CAB = document.getElementById('CAB');
        CAB.style.display = 'block';
        var CBA = document.getElementById('CBA');
        CBA.style.display = 'block';
        return true;
    }
    function reverse(x){
      var revString = "";
      for (var i = x.length - 1; i >= 0; i--)
      {
        revString += x[i];
      }
      return revString;

    }

    function ABC(){
      var concatenatedString = "";

      var input1 = userInput1.current.value;
      var input2 = userInput2.current.value;
      var input3 = userInput3.current.value;

      if(checked1)
      {
        input1 = reverse(input1);
        input2 = reverse(input2);
        input3 = reverse(input3);
      }

      if(checked)
      {
        concatenatedString = input1+", "+input2+", "+input3;
      }

      else{concatenatedString = input1+input2+input3;}

      document.write("<h1>Submission Result</h1>");
      document.write("ABC: " + concatenatedString +"<br/>");

    }
    function ACB(){
      var concatenatedString = "";

      var input1 = userInput1.current.value;
      var input2 = userInput2.current.value;
      var input3 = userInput3.current.value;

      if(checked1)
      {
        input1 = reverse(input1);
        input2 = reverse(input2);
        input3 = reverse(input3);
      }

      if(checked)
      {
        concatenatedString = input1+", "+input3+", "+input2;
      }

      else{concatenatedString = input1+input3+input2;}

      document.write("<h1>Submission Result</h1>");
      document.write("ACB: " + concatenatedString +"<br/>");

    }
    function BAC(){
      var concatenatedString = "";

      var input1 = userInput1.current.value;
      var input2 = userInput2.current.value;
      var input3 = userInput3.current.value;

      if(checked1)
      {
        input1 = reverse(input1);
        input2 = reverse(input2);
        input3 = reverse(input3);
      }
      
      if(checked)
      {
        concatenatedString = input2+", "+input1+", "+input3;
      }

      else{concatenatedString = input2+input1+input3;}

      document.write("<h1>Submission Result</h1>");
      document.write("BAC: " + concatenatedString +"<br/>");

    }
    function BCA(){
      var concatenatedString = "";

      var input1 = userInput1.current.value;
      var input2 = userInput2.current.value;
      var input3 = userInput3.current.value;

      if(checked1)
      {
        input1 = reverse(input1);
        input2 = reverse(input2);
        input3 = reverse(input3);
      }
      
      if(checked)
      {
        concatenatedString = input2+", "+input3+", "+input1;
      }

      else{concatenatedString = input2+input3+input1;}

      document.write("<h1>Submission Result</h1>");
      document.write("BCA: " + concatenatedString +"<br/>");

    }
    function CAB(){
      var concatenatedString = "";

      var input1 = userInput1.current.value;
      var input2 = userInput2.current.value;
      var input3 = userInput3.current.value;

      if(checked1)
      {
        input1 = reverse(input1);
        input2 = reverse(input2);
        input3 = reverse(input3);
      }
      
      if(checked)
      {
        concatenatedString = input3+", "+input1+", "+input2;
      }

      else{concatenatedString = input3+input1+input2;}

      document.write("<h1>Submission Result</h1>");
      document.write("CAB: " + concatenatedString +"<br/>");

    }
    function CBA(){
      var concatenatedString = "";

      var input1 = userInput1.current.value;
      var input2 = userInput2.current.value;
      var input3 = userInput3.current.value;

      if(checked1)
      {
        input1 = reverse(input1);
        input2 = reverse(input2);
        input3 = reverse(input3);
      }
      
      if(checked)
      {
        concatenatedString = input3+", "+input2+", "+input1;
      }

      else{concatenatedString = input3+input2+input1;}

      document.write("<h1>Submission Result</h1>");
      document.write("CBA: " + concatenatedString +"<br/>");

    }
    /*
    function part2() {       
        var inputNum = userInput.current.value;
        var userElements = elements.current.value;
        const CharArr = [];
        var CharArr2 = [];
        var characterI = 'A';
        var characterIndex = 0; 
        document.write("<h1>Submission Result</h1>");
        document.write("Input Number: " + inputNum +"<br/>");
        document.write("Elements: " + userElements + "<br/>");
        document.write("<br /><hr />");
        document.write("We'll call your blocks 'A', 'B', 'C', 'D', ... <br/>")

        
        for (var i = 0; i < inputNum*2; i+=2) {
            CharArr2 = [];
            for (var j = 1; j <= parseInt(userElements[i]); j++) {
                characterIndex = characterI + j
                CharArr2.push(characterIndex)
            }
            CharArr.push(CharArr2);
            characterI = nextCharacter(characterI);
            characterIndex = 0; 
        }

        characterI = 'A';
        for (i = 0; i < CharArr.length; i++) {
            document.write("<br>Characteristic " + characterI + ": ");
            document.write("[" + CharArr[i] + "]");
            characterI = nextCharacter(characterI);
        }
        
    }
*/
    return (

        <div>
            <br />
            <form>
                <label 
                className='text-white'>
                    String 1: 
                </label> 
            
                <input type='text' 
                ref={userInput1} 
                placeholder='A' /> 

                <label 
                className='text-white'>
                    String 2:  
                </label> 
            
                <input type='text' 
                ref={userInput2} 
                placeholder='B' /> 

                <label 
                className='text-white'>
                    String 3:  
                </label> 
            
                <input type='text' 
                ref={userInput3} 
                placeholder='C' /> 
                
                <input 
                onClick={part1}
                className='text-white' 
                type='button' 
                id='submit1' 
                  
                value='Check Elements' />
                <br />
                <p id='validMessage' 
                className='text-white' 
                hidden>
                    Ready to submit!
                </p>
                <br />
                <label>
                <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                />
                Seperate with commas
                </label>

                <label>
                <input
                type="checkbox"
                checked={checked1}
                onChange={handleChange1}
                />
                Reverse
                </label>
                
                <input 
                onClick={ABC} 
                className='text-white' 
                type='button' 
                id='ABC'
                value='ABC' 
                hidden/>
                <input 
                onClick={ACB} 
                className='text-white' 
                type='button' 
                id='ACB'
                value='ACB' 
                hidden/>
                <input 
                onClick={BAC} 
                className='text-white' 
                type='button' 
                id='BAC'
                value='BAC' 
                hidden/>
                <input 
                onClick={BCA} 
                className='text-white' 
                type='button' 
                id='BCA'
                value='BCA' 
                hidden/>
                <input 
                onClick={CAB} 
                className='text-white' 
                type='button' 
                id='CAB'
                value='CAB' 
                hidden/>
                <input 
                onClick={CBA} 
                className='text-white' 
                type='button' 
                id='CBA'
                value='CBA' 
                hidden/>
            </form>
            <br />
            
        </div>
    );
}
  
