import "./therapist.css";
const Therapist = () => {
  return (
    <div className="container">
      {/* <div className="left-sidebar">
        <button type="button" className="app-btn">Make appointment</button>
        <div className="popup-form" id="popup">
          <form>
            <span>Make appointment</span>
            <div className="input-group">
              <input type="datetime-local" required placeholder="Select DateTime"/>
            </div>
            <div className="input-group">
              <textarea id="issue" rows="8" required></textarea>
              <label htmlFor="issue">Your issue</label>
            </div>
            <div className="dropdown">
              <select id="therapist" required>
                <option value="therapist"> Select Therapist</option>
                <option value="Lorito">Lorito</option>
              </select>
            </div>
            <button type="submit" >SUBMIT</button>
          </form>
        </div>
      </div> */}

      <div className="right-sidebar1">
        <div className="wrapper">
          <div className="table-container">
            <table>
              <caption>
                Scheduled Sessions
              </caption>
                <tr>
                  <th>Date</th>
                  <th>Patient</th>
                  <th>none</th>
                  <th>status</th>
                </tr>
                <tr>
                  <td data-cell="Date">02/07/2023-08:00am</td>
                  <td data-cell="counsellor">Lorito</td>
                  <td data-cell="none">none</td>
                  <td data-cell="status">
                    <select id="status" required>
                      <option value="status"> Status</option>
                      <option value="Reject">
                        <button type="submit">Reject</button>
                      </option>
                      <option value="Approve">Approve</option>
                    </select>
                  </td>
                </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Therapist