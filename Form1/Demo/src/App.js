import React from 'react';

import './App.css';

function App() {
  return (
    <div>
      <center>
          <h1>SETH JAI PRAKASH POLYTECHNIC, DAMLA (YAMUNANAGAR)</h1>
          <h2>ADMISSION FORM</h2>
          </center>
          <h3>The Principal
SETH JAI PRAKASH POLYTECHNIC
DAMLA, YAMUNANAGAR
HARYANA-135001


</h3>
<h3>

Dear Sir,
</h3>
<p>
        Kindly register my name for admission against leftover/vacant seats in DET/DET (L) for which counselling will be done by institute.I am intersted in taking admission in your institute in any of the following branches.
    </p>
    <center>
       <table border="7">
           <tr>
               <th colspan="2">Seth Jai Prakash Polytechic ,Damla</th>
           </tr>
           <tr>
               <th>Govt Aided Course</th>
               <th>Self financing courses</th>
           </tr>
           <tr>
               <td> <a href="#">1.Computer Engineering</a></td>
               <td> <a href="#">1.Mechanical Engg</a></td>
           </tr>
           <tr>
               <td> <a href="#">2.Chemical(Pulp & Paper)</a></td>
               <td><a href="#">2.Computer Engineering</a></td>
           </tr>
           <tr>
               <td> <a href="#">3.Electronics and Communication Engg</a> </td>
              <td> <a href="#">3.Electrical Engg</a></td>
           </tr>
           <tr>
               <td></td>
               <td> <a href="#">4.Civil Engineering</a></td>
           </tr>
           <tr>
               <td> </td>
               <td><a href="#">5. Electronics and Comm. Engg</a></td>
           </tr>
       </table>
   </center>
   <input type='file' onchange="readURL(this)" />
    <img id="blah" src="#" alt="your image" />
    <h4>My particulars are given below:</h4>
    <div class="container">
        <form>
            (DET\DET(L)) : <input type="text" name="r"/> <br />
             Applying for govt. Aided/Self Financing : <input type="text" name="r"/> <br />
             Course name(Branch) :
        </form>
      </div>
      <div>
      <select>

               <option value="selectany">Electronics and Comm. Engg
               </option>
               <option value="selectany">Civil Engineering                      </option>
               <option value="selectany">Electrical Engg                         </option>
               <option value="selectany">    Computer Engineering                 </option>
               <option value="selectany">Mechanical Engg         </option>
               <option value="selectany">Chemical(Pulp & Paper)       </option>
            </select>
            <p>
            Registration NO/Roll No(DET/DET(L): <input type="text" /><br /><br /> Rank: <input type="text" />
            <br /><br /> Name: <input type="text" /><br /><br /> Father's name: <input type="text"/><br />
            <br /> Mother's name: <input type="text" name="r" /><br /><br /> Address:
            <textarea cols="20" rows="5"></textarea>
          <br />  <br /> Mobile/Res Phone No: <input type="text" /><br />  <br /> E-mail ID: <input type="text" size="30" /><br />
   <br />
          <input type="submit" /><input type="reset" />

            </p>
      </div>
</div>
  );
}

export default App;
