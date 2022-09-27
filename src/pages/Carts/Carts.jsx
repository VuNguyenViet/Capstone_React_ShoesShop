import React from "react";

export default function Carts() {
  return (
    <div className="carts">
      <h2>Carts</h2>
      <hr />
      <table className="table table-borderless carts__content">
        <thead>
          <tr>
            <td scope="col">
              <input type="checkbox" />
            </td>
            <td scope="col">id</td>
            <td scope="col">img</td>
            <td scope="col">name</td>
            <td scope="col">price</td>
            <td scope="col">quantity</td>
            <td scope="col">total</td>
            <td scope="col">action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">
              <input type="checkbox" />
            </td>
            <td>1</td>
            <td>
              <img src="https://picsum.photos/200" alt="..." />
            </td>
            <td>Product name</td>
            <td>1000</td>
            <td>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </td>
            <td>1000</td>
            <td>
              <button className="btnEdit">EDIT</button>
              <button className="btnDelete">DELETE</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={7}></td>
            <td>
              <button className="btnSubmitOrder">SUBMIT ORDER</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
